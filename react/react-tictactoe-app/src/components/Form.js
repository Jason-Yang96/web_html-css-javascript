import React from 'react'

export default function Form({value, setValue, handleSubmit}) {
    
    console.log("Form");
    const handleChange = (e) => { //할 일을 입력할 때 변화를 체크해서 반복적으로 값 상태를 Read하여 Update해준다.
        setValue(e.target.value);
    }
    
    
    return (
        <div>
            <form className='flex pt-4' onSubmit={handleSubmit}>
                <input
                    className='w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow'
                    type ='text'
                    name ='value'
                    style = {{flex: '10', padding: '5px'}}
                    placeholder = '해야 할 일을 입력하세요.'
                    value = {value}
                    onChange= {handleChange}
                />
                <input
                    className='p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-400'
                    type ='submit'
                    value = "입력"
                    style={{flex: '1'}}
                />
            </form>
        </div>
  )
}
