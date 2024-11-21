const array = [
    {
        vezeteknev: "Kocsis",
        keresztnev1: "Géza",
        keresztnev2: "Ferenc",
        hazas: "igen",
        haziallat: "kutyus"
    },
    {
        vezeteknev: "Horváth",
        keresztnev1: "Mária",
        keresztnev2: "Julia",
        hazas: "nem",
        haziallat: "cicus"
    },
    {
        vezeteknev: "Balogh",
        keresztnev1: "Ferenc",
        keresztnev2: "",
        hazas: "nem",
        haziallat: "teknoc"
    },
    {
        vezeteknev: "Horváth",
        keresztnev1: "Gábor",
        keresztnev2: "Attila",
        hazas: "igen",
        haziallat: "cicus"
    }
]

const table = document.createElement('table')
document.body.appendChild(table)

const thead = document.createElement('thead')
table.appendChild(thead)
const tr = document.createElement('tr')
thead.appendChild(tr)

const tbody = document.createElement('tbody')
table.appendChild(tbody)

const vezeteknev = document.createElement('th')
vezeteknev.innerHTML ="Vezeteknev"
tr.appendChild(vezeteknev)

const keresztnev = document.createElement('th')
keresztnev.innerHTML ="Keresztnev"
tr.appendChild(keresztnev)
keresztnev.colSpan = 2

const hazas = document.createElement('th')
hazas.innerHTML = "Hazas"
tr.appendChild(hazas)

const haziallat = document.createElement('th')
haziallat.innerHTML= "Allat"
tr.appendChild(haziallat)

render();


const form = document.getElementById('form')

form.addEventListener("submit", function(e){
    e.preventDefault();
    const lastname = document.getElementById('lastname')
    const firstname1 = document.getElementById('firstname1')
    const firstname2 = document.getElementById('firstname2')
    const married = document.getElementById('married')
    const pet = document.getElementById('pet')

    const lastnamevalue = lastname.value
    const firstname1value = firstname1.value
    const firstname2value = firstname2.value
    let marriedvalue = married.checked
    const petvalue = pet.value
    if(validateFields(lastnamevalue, firstname1value, petvalue)){
        if(marriedvalue){
            marriedvalue = "igen"
        }else{
            marriedvalue = "nem"
        }

        const new_persons = {
            vezeteknev:lastnamevalue,
            keresztnev1:firstname1value,
            keresztnev2:firstname2value,
            hazas: marriedvalue,
            haziallat: petvalue


        
        }
        array.push(new_persons)
        render()
        form.reset()
    }

})

function render(){
    

    tbody.innerHTML = ''
    for(let hawktuah of array){
        let sor = document.createElement('tr')

        const vezeteknev = document.createElement('td')
        vezeteknev.innerHTML = hawktuah.vezeteknev
        sor.appendChild(vezeteknev)


        const keresztnev1 = document.createElement('td')
        keresztnev1.innerHTML = hawktuah.keresztnev1
        sor.appendChild(keresztnev1)

        if(hawktuah.keresztnev2 == ""){
            keresztnev1.colSpan = 2
        }
        else{
            const keresztnev2 = document.createElement('td')
            keresztnev2.innerHTML = hawktuah.keresztnev2
            sor.appendChild(keresztnev2)
        }

        const hazas = document.createElement('td')
        hazas.innerHTML = hawktuah.hazas
        sor.appendChild(hazas)

        const haziallat = document.createElement('td')
        haziallat.innerHTML = hawktuah.haziallat
        sor.appendChild(haziallat)

        tbody.appendChild(sor)

        sor.addEventListener('click', function(e){
            const select = tbody.querySelector('.selected')
            if(select != undefined){
                select.classList.remove('selected')
            }
            e.currentTarget.classList.add('selected')
        })
        



        

        
    

    }

}


function validateFields(vezeteknev,keresztnev1,allat){
    let result = true

    document.getElementById("firstname1error").innerHTML = ''
    document.getElementById("lastnameerror").innerHTML = ''
    document.getElementById("peterror").innerHTML = ''

    if(vezeteknev == ''){
        const lastnameerror = document.getElementById("lastnameerror")
        lastnameerror.innerHTML = 'kotelezo'
        result = false
    }

    if(keresztnev1 == ''){
        const firstname1error = document.getElementById("firstname1error")
        firstname1error.innerHTML = 'kotelezo'
        result = false
    }
    
    if(allat == ''){
        const peterror = document.getElementById("peterror")
        peterror.innerHTML = 'kotelezo'
        result = false
    }

    return result


}