var $keyboardWrapper = $('.virtual-keyboard'),
    $key = $keyboardWrapper.find("input"),
    $key_delete = $('.delete'),
    $key_shift = $('.shift'),
    $outputField = $('.output input'),
    $currentValue = $outputField.val(),
    actionKeys = $(".delete,.shift")
    activeShiftClass = "shift-activated";

function _keystroke(keyCase){
  
  $key.not(actionKeys).on('click',function(e){
    e.preventDefault();
    

    if($key_shift.hasClass(activeShiftClass)){
      keyCase = 'upper';
      $key_shift.removeClass(activeShiftClass);
    }else{
      keyCase = 'lower';
    }
    

    if(keyCase == 'upper'){
      var keyValue = $(this).val().toUpperCase();
    }else{
      var keyValue = $(this).val().toLowerCase();
    }
    

    var output = $('.output input').val();
        $outputField.val(output + keyValue);
        getCurrentVal();
        focusOutputField();
  });
  
} 
  

$key_delete.on('click',function(e){
  e.preventDefault();
  $outputField.val($currentValue.substr(0,$currentValue.length - 1));
  getCurrentVal();
  focusOutputField();
});


$key_shift.on('click',function(e){
  e.preventDefault();
  $(this).toggleClass(activeShiftClass);
});


function getCurrentVal(){
  $currentValue = $outputField.val();
}


function focusOutputField(){
  $outputField.focus();
}

_keystroke("lower"); 