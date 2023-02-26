const htmldark = document.querySelector('html');
const btnDark = document.querySelector('.modedark');
const btnMoon = document.querySelectorAll('.btndark');
const backSoft = document.querySelectorAll('.backsoft');
const backHard = document.querySelectorAll('.backhard');

const icon = document.querySelectorAll('.icon');
const iconSyH = document.querySelectorAll('.icon__skills');
const firma = document.querySelector('.firma');
const fuente = document.querySelectorAll('.fuente');
const card = document.querySelectorAll('.card');

const imgAcademico = document.querySelectorAll('.academico');

const btnLow = document.querySelectorAll('.experiencia__botao--repo');
const btnHigh = document.querySelectorAll('.experience__botao--demo');
const input = document.querySelectorAll('.formcontato__input');
const inputtext = document.querySelector('.formcontato__textarea');

btnDark.addEventListener('click', lightAndDark)
function lightAndDark() {
  htmldark.classList.toggle('background__dark--soft');
  btnMoon.forEach(e => e.classList.toggle('disable')) ;
  backSoft.forEach(e => e.classList.toggle('background__dark--soft')) ;
  backHard.forEach(e => e.classList.toggle('background__dark--hard')) ;
  icon.forEach(e => e.classList.toggle('icon__mode-dark',)) ;
  iconSyH.forEach(e => e.classList.toggle('icon__mode-dark',)) ;
  firma.classList.toggle('firma__mode-dark');
  fuente.forEach(e => e.classList.toggle('fuente__dark'));
  card.forEach(e => e.classList.toggle('backround__card'));
  imgAcademico.forEach(e => e.classList.toggle('img-invert'));
  btnLow.forEach(e => e.classList.toggle('btn__low'));
  btnHigh.forEach(e => e.classList.toggle('btn__high'));
  input.forEach(e => e.classList.toggle('background__dark--soft'));
  input.forEach(e => e.classList.toggle('fuente__dark'));
  inputtext.classList.toggle('background__dark--soft');
  inputtext.classList.toggle('fuente__dark');

}