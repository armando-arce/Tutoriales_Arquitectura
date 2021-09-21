<template>
 <div class="container">
   <HeaderView />
   <h2 class="title">Computer Science Books</h2>
   <div class="row">
     <div class="four columns">
       <NuxtLink to='/books_index'>
         <img class="center" style="margin:20px" title="Books" src="images/books.svg">
 	   </NuxtLink>
     </div>
     <div class="four columns value-prop">
       <NuxtLink to='/authors_index'>
         <img class="center" style="margin:20px" title="Authors" src="images/authors.svg">
       </NuxtLink>
     </div>
     <div class="four columns value-prop">
        <NuxtLink to='/publishers_index'>
         <img class="center" style="margin:20px" title="Publishers" src="images/publishers.svg">
        </NuxtLink>
     </div>
   </div>
   <FooterView />
 </div>
</template>