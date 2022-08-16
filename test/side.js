const sidebar = document.getElementById('sidebar');
const close = document.getElementById('close');
const open = document.getElementById('open');
 
const closeSidebar = () =>{
    sidebar.classList.add('closed'); 
    sidebar.classList.remove('opened'); 
    close.style.display = 'none'; 
    open.style.display = 'block' 
}
 
const openSidebar = () =>{
    sidebar.classList.add('opened');
    sidebar.classList.remove('closed');
    open.style.display = 'none';
    close.style.display = 'block';
}
 
close.addEventListener('click', closeSidebar);
open.addEventListener('click', openSidebar);
 