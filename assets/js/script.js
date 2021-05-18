import $, { css } from 'jquery'

$('.Navbar-Dropdown').hover(
  function () {
    // over
    console.log('DD Hover')
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
          300
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
          300,
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
    if ($('#Navbar').css('display') == 'none') {
      $('body').css('overflow-y', 'hidden')
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
    } else {
      $('#Navbar').animate(
        {
          opacity: 0,
          marginLeft: '-100%',
        },
        300,
        () => {
          $('#Navbar').css('display', 'none')
          $('body').css('overflow-y', 'visible')
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
      $('.Navbar .Navbar-Dropdown-Content').css('margin-top', '100%')
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
      $('body').css('overflow-y', 'visible')
      $('.Navbar .Navbar-Dropdown-Content').css('display', 'none')
    }
  }
}
__resize()
$(window).resize(() => __resize())
