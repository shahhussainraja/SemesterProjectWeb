$(function(){
 getCourseData();
})

function getCourseData() {
    console.log(" getData event runs");
    $.ajax({
      url: "http://localhost:8080/user/getdata",
      method: "GET",
      success: function (response) {
        console.log(response);
        let display = $("#appendDataBaseHmtl");
        display.empty();
        for (let i = 0; i < response.length; i++) {
            let data = response[i];
            let courseName = data.link;
            let link = data.link;
            let description = data.description;
          display.append(`<li><div class="blog-title">
          <h2><a href="${link}" target="_blank" title="">"${link}" </a></h2>  <i style="float: right;cursor:pointer" class="fa fa-2x fa-solid fa-thumbs-up"></i>	
      </div>
      <div class="blog-desc">
          <p>${description}</p>
      </li>`);
        }
      },error:function(err){
          console.log(err.message);
      }
      
    });
  }

//   function postComment() {

//     let commentData = $("commenter-message").val();

//    let comment ={
//        username:,
//        data:commentData
//    }
//     console.log(" Comments hits");
//     $.ajax({
//       url: "",
//       method: "POST",
//       data: comment,
//       success: function (response) {
//         console.log(response);
//         let display = $("#appendDataBaseHmtl");
//         display.empty();
       
//       },
//     });
//   }
