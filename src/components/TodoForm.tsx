import React, { KeyboardEvent, useRef } from 'react';

interface TodoFormProps {
    onAdd( title: string ): void
}

const TodoForm: React.FC<TodoFormProps> = props => {
    // TODO: First variant how to work with input
    // const [title, setTitle] = useState<string>("");
    //
    // const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value);
    // }
    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = ( event: KeyboardEvent ) => {
        if (event.key === 'Enter') {
            // @ts-ignore
            props.onAdd(ref.current.value);
            // @ts-ignore
            ref.current.value = ''
            // setTitle('');
        }
    }


    return (
        <div >
            <div className="input-field mt2">
                <input
                    // value={title}
                    type="text"
                    id="title"
                    ref={ ref }
                    placeholder="Enter todo action"
                    // onChange={changeHandler}
                    onKeyPress={ keyPressHandler }
                />
                <label htmlFor="title"
                       className="active"
                >
                    Enter todo action
                </label >
            </div >
        </div >
    );
};

export default TodoForm;
