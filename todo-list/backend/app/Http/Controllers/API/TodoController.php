<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

// use Models
use App\Todo;

// use Validation requests
use App\Http\Requests\TodoRequest;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getIndex(Request $request)
    {
        try{
            $page = $request->has('page') ? $request->get('page') : 1;
            $page_size = $request->has('page_size') ? $request->get('page_size') : 10;

            $todos = Todo::all();

            return response()->json([
                    'count' => $todos->count(),
                    'page' => $page,
                    'page_size' => $page_size,
                    'data' => $todos
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                    'admin_message' => $e->getMessage(),
                    'message' => 'Unable to retrieve data from the request.',
                    'data' => []
            ], 400);
        }
        

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function postIndex(Request $request)
    {
        try{
            $request->validate([
                'title' => 'required',
            ]);

            $todo = new Todo;

            $todo->title = $request->get('title');
            $todo->description = $request->has('description') ? $request->get('description') : "";
            $todo->isComplete = false;

            $todo->save();

            return response()->json([
                    'data' => $todo
            ], 200);
        }catch(\Exception $e){
            return response()->json([
                    'admin_message' => $e->getMessage(),
                    'message' => 'Unable to store record.',
                    'data' => []
            ], 400);
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function putIndex(Request $request, $id)
    {
        try{
            $request->validate([
                'title' => 'required',
            ]);

            $todo = Todo::find($id);
            if($todo){

                $todo->title = $request->get('title');
                $todo->description = $request->get('description');
                $todo->isComplete = $request->get('isComplete');

                $todo->save();

                return response()->json([
                        'data' => $todo
                ], 200);
            }else{
                throw new Exception("Didn't find record or issue with id", 1);
            }
        }catch(\Exception $e){
            return response()->json([
                    'admin_message' => $e->getMessage(),
                    'message' => 'Unable to retrieve data from the request.',
                    'data' => []
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteIndex($id)
    {
        try{
            $todo = Todo::find($id);
            if($todo){
                $todo->delete();

                return response()->json([
                    'success' => true,
                ], 200);
            }else{
                throw new Exception("Didn't find record or issue with id", 1);
            }
        }catch(\Exception $e){
            return response()->json([
                    'admin_message' => $e->getMessage(),
                    'message' => 'Unable to retrieve data from the request.',
                    'data' => []
            ], 400);
        }
    }
}
