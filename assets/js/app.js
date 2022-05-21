
var cl=console.log;
var info = document.getElementById("info");
let cardInfo =[
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url":"https://images.unsplash.com/photo-1607396933430-4b39e1afd531?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952",
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url":"https://images.unsplash.com/photo-1549608276-5786777e6587?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmlyZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
    "thumbnailUrl": "https://via.placeholder.com/150/771796",
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://images.unsplash.com/photo-1620694563886-c3a80ec55f41?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355",
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://images.unsplash.com/photo-1636246441747-7d7f83f4629c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776",
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://images.unsplash.com/photo-1620447875063-19be4e4604bc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97",
  },
  
]  
//					<!--<div class="card">
//						<div class="card-body">
//							<figure class="mycard">
//								<img src= "https://images.unsplash.com/photo-1652272161081-cba73bec814e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" class="img-fluid">
//								<figcaption>
//									<p class = "title"><span> natus nisi omnis corporis facere molestiae rerum in</span></p>
//									<span class="id">ID : 1</span>
//									<span class="albumid">album ID :1</span>
//									
									
//								</figcaption>
//							</figure>
//						</div>
//					</div>-->

var result="";
cardInfo.forEach(function(card){
	result+=`
				<div class="col-sm-4">
					<div class="card">
						<div class="card-body">
							<figure class="mycard">
								<img src= "${card.url}">
								<figcaption>
									<p class = "title"><span> ${card.title}</span></p>
									<span class="id">ID : ${card.id}</span>
									<span class="albumid">album ID :${card.albumId}</span>
									
									
								</figcaption>
							</figure>
						</div>
					</div>
				</div>`
	
})
cl(result);
info.innerHTML= result;

