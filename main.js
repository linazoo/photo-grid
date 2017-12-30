(function () {
  // make instagram GET request 

  // loop through array of images

  // create HTML for each image item

  /**
  set a background image on this div and apply the right size class
  
  <div class="item__details">
    jelly-o brownie sweet
  </div>
  */

  var token = '7060436.be13e05.6691ed79dd50421f95a09dc182c3fb10',
    username = 'lilemoji', // rudrastyh - my username :)
    num_photos = 20;

  $.ajax({ // the first ajax request returns the ID of user rudrastyh
    url: 'https://api.instagram.com/v1/users/search',
    dataType: 'jsonp',
    type: 'GET',
    data: { access_token: token, q: username }, // actually it is just the search by username
    success: function (data) {
      console.log(data);
      $.ajax({
        url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent', // specify the ID of the first found user
        dataType: 'jsonp',
        type: 'GET',
        data: { access_token: token, count: num_photos },
        success: function (data2) {
          console.log(data2);
          for (x in data2.data) {
            var item = document.createElement('div');
            item.classList.add('item');
            $(item).css('background-image', `url(${data2.data[x].images.thumbnail.url})`);
            // itemHtml += '</div>'
            $('.grid').append(item);
          }
        },
        error: function (data2) {
          console.log(data2);
        }
      });
    },
    error: function (data) {
      console.log(data);
    }
  });

})();