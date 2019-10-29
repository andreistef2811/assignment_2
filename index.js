
const FIRST_NAME = "Andrei";
const LAST_NAME = "Stancescu";
const GRUPA = "1090";

/**
 * Make the implementation here
 */
function initCaching() {
    
        var cache={
            about: 0,
            home: 0,
            contact: 0
        };
            
        cache.pageAccessCounter=function(page){
            console.log("Parameter: " +typeof(page));
            console.log("Page: "+page);
            if(page!==undefined){
                if(page.toUpperCase()=="ABOUT"){
                this.about++;
                
               }else if(page.toUpperCase()=="HOME"){
                   this.home++;
               }else if(page.toUpperCase()=="CONTACT"){
                   this.contact++;
               }}else{
                this.home++;
                
               }
               
                
            };
            cache.getCache=function(){
                return cache;
                
            }
        
         return cache;
    }


module.exports = {
    FIRST_NAME,
    LAST_NAME,
    GRUPA,
    initCaching
}

