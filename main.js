function bmi(){
    if(height.value>0 && weight.value>0)
    {
        const Height = (height.value/100)**2
    console.log(Height);
    
    const Weight = weight.value
    console.log(Weight);

    const output = (Weight/Height).toFixed(2)
    console.log(output);

    result.innerHTML = `<h3 class="text-danger fs-5 mt-3">
    Your BMI is ${output} </h3>
`

    }else{
        alert("enter valid inputs")
    }

}