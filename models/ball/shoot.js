AFRAME.registerComponent('bullets',{
    init:function(){
        this.shootBullet();
    },
    throwBall:function(){
        window.addEventListener("keydown",(e)=>{
             if(e.key==="s"){ 
                 var ball=document.createElement("a-entity"); 
                   ball.setAttribute("geometry",
                    { 
                        primitive:"circle", 
                        radius:0.3 }); 
                 bullet.setAttribute("material","color","black");
                  var cam=document.querySelector("#camera"); 
                  pos=cam.getAttribute("position") 
                  bullet.setAttribute("position",
                  { x:pos.x, y:pos.y, z:pos.z, }) 
                  var camera=document.querySelector("#camera").object3D; 
                  var direction=new THREE.Vector3(); 
                  camera.getWorldDirection(direction); 
                  bullet.setAttribute("velocity",direction.multiplyScalar(-10))
                   var scene=document.querySelector("#scene"); 
                   scene.appendChild(bullet) 
                } })
    }
})