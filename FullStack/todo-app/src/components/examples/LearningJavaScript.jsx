const person = {
    name: "lila",
    address:{
        line1:"Krug 1 Str",
        city:"Kitchener",
        country:"Canada"
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    // Use map to output all elements of profiles    
    printProfile:()=>{
        person.profiles.map(
            // (profile)=>{
            //     console.log(profile);
            // }

            //No semicolon!!!
            profile => console.log(profile)
            
        )
    }
}

export default function LearningJavaScript(){
    return (
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
        </>

    )
}

