import React, { useEffect, useRef, useState } from 'react';

function TextArea() {
    const textRef = useRef(null);
    const [value, setValue] = useState("");

    useEffect(() => {
        textRef.current.style.height = 32;
        textRef.current.style.height = textRef.current.scrollHeight;
    }, [value]);

    return (
        <textarea style={{
            minHeight: 32
        }}
            ref={textRef}
            onChange={(text) => setValue(text.target.value)} />
    );
}

export default TextArea;