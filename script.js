const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let w,h,particles;
function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function initParticles(){
  particles = [];
  for(let i=0;i<60;i++){
    particles.push({
      x: Math.random()*w,
      y: Math.random()*h,
      vx:(Math.random()-0.5)*0.3,
      vy:(Math.random()-0.5)*0.3
    });
  }
}
initParticles();

function animate(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  particles.forEach(p=>{
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0||p.x>w) p.vx*=-1;
    if(p.y<0||p.y>h) p.vy*=-1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,1.5,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
