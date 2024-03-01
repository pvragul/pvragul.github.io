
function myFunction() {
    var menubtn = document.getElementById('menubtn');

    menubtn.classList.toggle("fa-times");
    // menubtn.style.rotate="180deg"
    document.getElementById('nav_bar').classList.toggle('show');
    
    
}
var act_tab = document.querySelectorAll(".nav_item");
    
act_tab.forEach(item => 
    item.addEventListener("click", ()=>{
        document.getElementById('nav_bar').classList.remove('show');
        menubtn.classList.toggle("fa-times");
    })
    // item.classList.remove("active")
) 


window.onscroll = ()=>{ scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.querySelector('header').style.display = 'flex'
        document.querySelector('.hint-scroll').style.display = 'none'
      } else {
        document.querySelector('header').style.display = 'none'
        document.querySelector('.hint-scroll').style.display = 'block'
      }
}

const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
});