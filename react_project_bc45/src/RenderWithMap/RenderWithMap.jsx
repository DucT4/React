import React, { Component } from 'react'

const result = [
    { username: 'nguyenvana', avatar: 'https:i.pravatar.cc?u=4', age: 20, phone: '09090909' },
    { username: 'nguyenvanb', avatar: 'https:i.pravatar.cc?u=2', age: 20, phone: '09090909' },
    { username: 'nguyenvanc', avatar: 'https:i.pravatar.cc?u=3', age: 20, phone: '09090909' },
]



export default class RenderWithMap extends Component {

    // renderUser = () => {
    //     let output = [];
    //     for (let user of result) {
    //         let jsxTR = 
    //         <tr key={user.id}>
    //             <td>{user.username}</td>
    //             <td><img src={user.avatar} alt="..." width={80} height={80} /></td>
    //             <td>{user.age}</td>
    //             <td>{user.phone}</td>
    //         </tr>;
    //         output.push(jsxTR);
    //     }
    //     return output;
    // }
    renderUser = () => {
        let output = result.map((user) => {
            return <tr key={user.id}>
                <td>{user.username}</td>
                <td><img src={user.avatar} alt="..." width={80} height={80} /></td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
            </tr>;
        });
        return output;
    }

    renderCardUser = () => {
        let outputInner = result.map((card,index) => {
            return <div className='col-4' key={index}>
                <img src={card.avatar} alt={card.username} width={100} height={100} />
                 <div className='card-body'>
                    <h3>{card.username}</h3>
                    <p>Lorem ipsum dolor sit amet.
                    
                    </p>
                 </div>
            </div>
        });
        return outputInner;
    }

    render() {
        return (
            [
                <div className='container'>
                    <h3>List User</h3>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>username</th>
                                <th>avatar</th>
                                <th>age</th>
                                <th>phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderUser()}
                        </tbody>
                    </table>
                    <hr />
                    <h3>List nember</h3>
                    <div className='row'>
                        {this.renderCardUser()}
                    </div>
                </div>
            ]


        )
    }
}

{/* <tr> 
<td>Nguyen Van A</td>
<td>
    <img src="https://i.pravatar.cc?u=1" alt="..." width={80} height={80} />
</td>
<td>20</td>
<td>
    00990909
</td>
</tr>
<tr> 
<td>Nguyen Van B</td>
<td>
    <img src="https://i.pravatar.cc?u=4" alt="..." width={80} height={80} />
</td>
<td>22</td>
<td>
    00990909
</td>
</tr> */}
