
<script>
export default{
 name: 'Filter'
}

</script>

<template>
  
  <div>
        <p style="font-size: large;" class="m-4">Result for Service Name</p>
      </div>
      

      <!-- dropwdowns -->
      <div class="dropdown m-4">
        <button class="btn btn-dark dropdown-toggle m-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Category
        </button>
        <ul class="dropdown-menu">
          <li><button class="dropdown-item text-light" type="button">All Categories</button></li>
          <li><button class="dropdown-item text-light" type="button">Health</button></li>
          <li><button class="dropdown-item text-light" type="button">Fashion</button></li>
        </ul>


        


<button class="btn btn-dark dropdown-toggle m-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Budget
        </button>
        <ul class="dropdown-menu">
          <div class="m-2">
          <ul class="list-group">
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
              <label class="form-check-label" for="firstRadio">Value <span class="text-body-tertiary"> Under SGD 179</span></label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
              <label class="form-check-label" for="secondRadio">Mid-range <span class="text-body-tertiary"> Under SGD 179 - SGD 251</span></label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
              <label class="form-check-label" for="thirdRadio">High-end <span class="text-body-tertiary"> Under SGD 251 and above</span></label>
            </li>
            <li class="list-group-item">
              <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
              <label class="form-check-label" for="thirdRadio">Custom</label>
              <div>
                <p class="text-body-tertiary">MIN</p>
                <input type="number" id="replyNumber" placeholder="Any"/><i class="m-1"> S$</i>
                <p class="text-body-tertiary">MAX</p>
                <input type="number" id="replyNumber" placeholder="Any"/><i class="m-1"> S$</i>
              </div>
            </li>
          </ul>
        </div>
          </ul>
      </div>
      
      <div class="flex flex-items-center flex-wrap">
        <div class="numberOfService tbody-5 m-4">2000 services available</div>
      </div>

      

</template>

<style>
.content{
            background-color: #7EBFB3;
            border: #7EBFB3 1px solid;
            border-radius: 20px;
            padding: 20px;
            color: white;
        }
        button{
          background-color: #194759 ;
          color: white;
          
        }
        
        .categories,.suggested{
            font-size: 20px;
        }

        .numberOfService{
            top: 10px;

        }
        .box-feature {
        background: #fff;
        border-radius: 4px;
        padding: 30px;
        margin-bottom: 30px; 
      }
        .box-feature h3, .box-feature .h3 {
          font-size: 16px;
          margin: 0;
          padding: 0; 
        }
        .box-feature [class^="flaticon-"] {
          color: #00204a;
          font-size: 60px;
          margin: 0 0 10px 0;
          display: block;
          padding: 0;
          line-height: 0; 
        }
</style>