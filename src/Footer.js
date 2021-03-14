    import React from 'react'
    import style from './recipes.module.css';
    
    const Footers = () => {
        return (
    <div class="d-flex flex-column">
  <footer className={style.recipe}>
    <div>
      Softworks!
      <span > &copy; {new Date().getFullYear()} Copyright: Okoro Godwin Chinedu
     </span>
    </div>
    <div class="ml-auto">
      <span>Powered by </span>
      <a href="https://github.com/G0dgood?tab=repositories " class="text-white">Godwin-Github</a>
    </div>
  </footer>
</div>
        )
    }
    
    export default Footers
    