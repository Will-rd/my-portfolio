import React from 'react';

export default function Contact() {
  return (
    <div className='text-slate-900 text-xl font-bold '>
      <h1>Contact Page</h1>
      <div>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
              <div id="emailHelp" class="form-text">Leave your name, email, and any comments that you would like to share</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputName1" class="form-label">Name</label>
            <input type="input" class="form-control" id="exampleInputName1"></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputComment1" class="form-label">Comments</label>
            <input type="input" class="form-control" id="exampleInputComment1"></input>
          </div>
          
          <button type="submit" class="btn btn-primary bg-danger" >Submit</button>
        </form>
      </div>
    </div>
  );
}
