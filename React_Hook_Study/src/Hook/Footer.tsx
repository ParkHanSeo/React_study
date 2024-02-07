import React,{ useState } from 'react';

type Props = {
    hookTypeClickHandle: (type:string) => void;
}

export const Footer: React.FC<Props> = ({ hookTypeClickHandle }) => {
    return (
        <footer>
            <div>
                <button style={{marginTop:'45px'}} onClick={() => hookTypeClickHandle("")}>
                    <h3 style={{margin:'0'}}>뒤로가기</h3>
                </button>
            </div>
        </footer>
    )
}
