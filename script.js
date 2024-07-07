const variables = document.querySelectorAll('.variables-container input');

variables.forEach(variable=>{
  variable.addEventListener('input',function(){

    const unit = this.dataset.unit || '';
    document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${unit}`);
  });
});
