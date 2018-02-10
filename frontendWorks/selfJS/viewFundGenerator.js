$(function () {
  let url = encodeURI(window.location.href);
  $('#facebookBTN').click(function () {
    window.location.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  });
  $('#twitterBTN').click(function () {
    window.location.href = `https://twitter.com/home?status=${url}`;
  });
  $.post('/fundGenerator/getGenerator',{
    username: JSON.parse(localStorage.getItem('userData')).data.username
  },(data)=>{
    makeBlog(data);
  });
  function makeBlog(data) {
    data = data.data;
    console.log(data);
    let d = new Date();
    $('#blogName').text(data.fname + " " + data.lname)
    $('#name').text(data.fname + " " + data.lname)
    $('#modeOfPayment').text(data.mop)
    $('#lastDate').text(data.mop)
    $('#details').text(data.mop)
    $('#dateFiled').text(d)
    $('#contact').text(data.contactDetails);
  }
});