import * as $ from 'jquery'

$('.Navbar-Dropdown, .Navbar-Dropdown *').hover(
  function () {
    // over
    let w = window.innerWidth
    if (w > 1200) {
      $(this)
        .find('.Navbar-Dropdown-Content')
        .css('display', 'block')
        .css('margin-top', '-25px')
        .css('opacity', '0')
        .animate(
          {
            marginTop: 0,
            opacity: 1,
          },
          200
        )
    }
  },
  function () {
    // out
    let w = window.innerWidth
    if (w > 1200) {
      $(this)
        .find('.Navbar-Dropdown-Content')
        .animate(
          {
            opacity: 0,
            marginTop: '-25px',
          },
          200,
          () => {
            $(this).find('.Navbar-Dropdown-Content').css('display', 'none')
          }
        )
    }
  }
)
function toggleMenu() {
  let w = window.innerWidth
  if (w < 1200) {
    if ($('#Navbar').hasClass('Navbar-MB') == false) {
      __resize()
    }
    if ($('#Navbar').css('display') == 'none') {
      // Open Menu
      $(window).css('overflow-y', 'hidden')
      $('#Navbar')
        .css('display', 'block')
        .css('margin-left', '-100%')
        .css('opacity', '0')
        .animate(
          {
            marginLeft: '0',
            opacity: 1,
          },
          300
        )
      $('#MenuButton').addClass('opened')
      $('.Navbar-MB .Navbar-Dropdown-Content')
        .css('display', 'block')
        .css('opacity', '1')
        .css('margin-top', '10px')
    } else {
      // Close Menu
      $('#Navbar').animate(
        {
          opacity: 0,
          marginLeft: '-100%',
        },
        300,
        () => {
          $('#Navbar').css('display', 'none')
          $(window).css('overflow-y', 'visible')
        }
      )
      $('#MenuButton').removeClass('opened')
    }
  }
}
$('#MenuButton').click(function (e) {
  toggleMenu()
})

$('#Navbar a').click(function (e) {
  toggleMenu()
})

function __resize() {
  let w = window.innerWidth
  if (w < 1199) {
    if ($('#Navbar').hasClass('Navbar-MB') == false) {
      $('#Navbar')
        .addClass('Navbar-MB')
        .removeClass('Navbar')
        .css('display', 'none')
      $('.Navbar .Navbar-Dropdown-Content').css('display', 'block')
      $('.Navbar .Navbar-Dropdown-Content').css('opacity', '1')
    }
  } else {
    if ($('#Navbar').hasClass('Navbar-MB') == true) {
      $('#Navbar')
        .removeClass('Navbar-MB')
        .addClass('Navbar')
        .css('display', 'flex')
        .css('margin-left', '0')
        .css('opacity', '1')
      $('#MenuButton').removeClass('opened')
      $(window).css('overflow-y', 'visible')
      $('.Navbar .Navbar-Dropdown-Content').css('display', 'none')
    }
  }
}
__resize()
$(window).resize(() => __resize())
