



var whatcloths = function() {
    var cloths = prompt('what cloths do you need?.. please pick between: men, women, kids');
  
    var picture; 
  
   
    if (cloths =='women') {
  
        picture = '<img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiG0pSN8OzkAhWMjqQKHfodBSUQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.annahar.com%2Farticle%2F778815-%25D8%25A3%25D9%2586%25D8%25A7-%25D8%25A5%25D9%2586%25D8%25B3%25D8%25A7%25D9%2586%25D8%25A9-%25D9%2582%25D8%25A8%25D9%2584-%25D8%25A3%25D9%2586-%25D8%25A3%25D9%2583%25D9%2588%25D9%2586-%25D8%25A7%25D9%2585%25D8%25B1%25D8%25A3%25D8%25A9&psig=AOvVaw3LUxnedZR0UeYFFKGQw-fG&ust=1569531894254869">'
    
      } else if (cloths =='men') {
    
        picture = '<img src="https://png.pngtree.com/element_our/png_detail/20180926/logo-template-with-the-image-of-the-man-in-hat-png_113366.jpg">'
      }
          else {
              picture = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRED2u8xSb_QrI0MYxkI9-NMbMs-0DDifpGSEykiZx-7D7py1gV">'
    
          }
  
  
  
    return picture;
  
  }
