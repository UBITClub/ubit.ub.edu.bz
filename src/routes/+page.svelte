<script lang="ts">
</script>

<main>

   <svelte:head>
      <title>UBIT | 503</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charset="UTF-8" />
      <link
         href="https://fonts.googleapis.com/css?family=Open+Sans:400,700%7CPoppins:400,500"
         rel="stylesheet"
      />
      <!--- link href="assets/css/styles.css" rel="stylesheet" / --->
   </svelte:head>

      <div class="main-content" style="">
         <div class="display-table">
            <div class="display-table-cell">
               <h1 class="title"><b>Building</b></h1>
               <p class="subtitle">
                  We are working on creating something fresh, new and
                  attractive! <br />
                  UBIT will be back soon.
               </p>

               <a href="https://github.com/UBITClub/ubit.ub.edu.bz/wiki" target="_blank"
                  ><div class="xyz"
                     style="
                        padding: 1vw 2vh 1vw 2vh;
                        font-size: 1.4em;
                        color: white;
                        font-weight: 600;
                        background: #c72bb4;
                        border-radius: 0.2vw;
                     "
                  >
                     Development Status
                  </div></a
               >
               <p>
                  <small style="opacity: 0.65">
                     If you have any questions, do not hesitate contact us via
                     <a
                        href="mailto:ubit@ub.edu.bz?subject=[ From Landing Page ] General Query"
                        style="text-decoration: underline; color: #cbcbcb"
                        >email</a
                     >
                  </small>
               </p>
            </div>
         </div>
      </div>
</main>


<style>

*, ::after, ::before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit
}

*, ::after, ::before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit
}
  
  .xyz:hover{opacity:0.5;}

:global(html) {
    font-size: 100%;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    -ms-touch-action: manipulation;
    touch-action: manipulation
}

:global(body) {
    font-size: 16px;
    width: 100%;
    height: 100%;
    margin: 0;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-wrap: break-word;
    overflow-x: hidden;
    color: #fff;
    background-image: url(/assets/images/background_0.jpg);
    font-family: Poppins, sans-serif
}

a, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0
}

h1, h2, h3, h4, h5, h6 {
    line-height: 1.5;
    font-weight: inherit
}

p {
    line-height: 1.6;
    font-size: 1.3em;
    font-weight: 400;
    color: #fff
}

h1 {
    font-size: 3.5em;
    line-height: 1
}

h2 {
    font-size: 3em;
    line-height: 1.1
}

h3 {
    font-size: 2.5em
}

h4 {
    font-size: 1.5em
}

h5 {
    font-size: 1.2em
}

h6 {
    font-size: .9em;
    letter-spacing: 1px
}

a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    line-height: 1
}

a:active, a:focus, a:hover {
    text-decoration: none;
    color: #ff6c38
}

.display-table {
    display: table;
    height: 80%;
    width: 100%
}

.display-table-cell {
    display: table-cell;
    vertical-align: middle
}

::-webkit-input-placeholder {
    font-size: .9em;
    letter-spacing: 1px
}

::-moz-placeholder {
    font-size: .9em;
    letter-spacing: 1px
}

:-ms-input-placeholder {
    font-size: .9em;
    letter-spacing: 1px
}

:-moz-placeholder {
    font-size: .9em;
    letter-spacing: 1px
}

.main-content {
    position: relative;
    height: 100vh;
    z-index: 1;
    padding: 0 20px;
    background-size: cover;
    color: #fff;
    text-align: center
}

.main-content:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: .4;
    background: #000
}

.main-content .subtitle {
    margin: 20px auto;
    max-width: 550px
}

@media only screen and (max-width: 767px) {
    p {
        line-height: 1.4
    }

    h1 {
        font-size: 1.9em;
        line-height: 2
    }

    h2 {
        font-size: 2.2em;
        line-height: 1.1
    }

    h3 {
        font-size: 1.8em
    }

    .main-content {
        padding: 0 !important
    }
}

@media only screen and (max-width: 479px) {
    :global(body) {
        font-size: 12px
    }
}


</style>
