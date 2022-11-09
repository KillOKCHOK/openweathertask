exports.testvalidation=(val)=>{
    // console.log("formvalidated");
    // console.log(val);
    return { 
        type:'testvalidation',
        testValidation:val.validated ,
        samePwd:val.samePwd
    }
 }

 