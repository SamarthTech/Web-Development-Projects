from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .forms import SignUpForm, AddRecordForm
from .models import Record
from django.db.models import Q
from django.core.paginator import Paginator

# Create your views here.


def home(request):
    records=Record.objects.all()
    queryset=Record.objects.all()
    
    if request.method=='POST':
        username=request.POST['username']
        password=request.POST['password']

        user=authenticate(request,username=username,password=password)
        if user is not None:
            login(request,user)
            messages.success(request,"Logged IN")
            return redirect('home')
        else:
            messages.success(request,"There was an error logging in please try again")
            return redirect('home')
    else:
        if request.GET.get('search'):
            search=request.GET.get("search")
            records=records.filter(
                Q(first_name__icontains=search)|
                Q(last_name__icontains=search)|
                Q(email__icontains=search))
            

            return render(request,'home.html',{'records':records})
        

        return render(request,'home.html',{'records':records})


def login_user(request):
    pass

def logout_user(request):
    logout(request)
    messages.success(request,"You have been logged out")
    return redirect('home')


def register_user(request):
    if request.method=='POST':
        form=SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username=form.cleaned_data['username']
            password=form.cleaned_data['password1']
            user=authenticate(username=username,password=password)
            login(request,user)
            messages.success(request,"You have Sucessfully registered")
            return redirect('home')
    else:
        form=SignUpForm()
        return render(request,'register.html',{'form':form})
    return render(request,'register.html',{'form':form})


def customer_record(request,pk):
    if request.user.is_authenticated:
        customer_record=Record.objects.get(id=pk)
        return render(request,'record.html',{'customer_record':customer_record})
    else:
        messages.success(request,"You must be logged in")
        return redirect('home')

def delete_record(request,pk):
    if request.user.is_authenticated:
        delete_it = Record.objects.get(id=pk)
        delete_it.delete()
        messages.success(request,"Record Deleted Sucessfully")
        return redirect('home')
    else:
        messages.success(request,"You must be logged in")
        return redirect('home')
    

def add_record(request):
        form=AddRecordForm(request.POST or None)
        if request.user.is_authenticated:
            if request.method=='POST':
                if form.is_valid():
                    add_record=form.save()
                    messages.success(request,"record added")
                    return redirect('home')


            return render(request,'add_record.html',{'form':form})
        else:
            messages.success(request,"Login first")
            return redirect('home')
        

def update_record(request,pk):
    if request.user.is_authenticated:
        current_record=Record.objects.get(id=pk)
        form=AddRecordForm(request.POST or None,instance=current_record)
        if form.is_valid():
            form.save()
            messages.success(request,"Record updated")
            return redirect('home')
        return render(request,'update_record.html',{'form':form})
    else:
        messages.success(request,"Login first")
        return redirect('home')
