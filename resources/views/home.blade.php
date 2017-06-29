@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-primary">
                <div class="panel-heading">Chat box</div>
                <div class="panel-body" style="height: 350px; overflow-y: auto;" id="body">
                </div>
                <div class="panel-footer">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Enter your comment..." id="input">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button" id="send">Send</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
