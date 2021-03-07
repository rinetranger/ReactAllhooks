import React from 'react'
import useInput from '../hooks/useInput'

function Form() {
    const [firstName,bindFirstName,resetFirstName]=useInput('')
    const [lastName,bindLastName,resetLastName]=useInput('')


    const handleSubmit = e =>{
        e.preventDefault();
        alert(`こんにちは ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <div>
                        <label>FisrtName</label>
                        <input type="text" {...bindFirstName} />
                    </div>
                    <div>
                        <label>LastName</label>
                        <input type="text" {...bindLastName} />
                    </div>
                <input type="submit">send</input>
            </form>
        </div>
    )
}

export default Form
