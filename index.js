function handleClicked() {
  const navbar = document.getElementById("navbar");
 

  if (!navbar.style.display) 
  {
    navbar.style.display = "block";
  } 
  else if (navbar.style.display == "block") 
  {
    navbar.style.display = "none";
  } 
  else 
  {
    navbar.style.display = "block";
  }

  console.log(navbar.style.display);
}
