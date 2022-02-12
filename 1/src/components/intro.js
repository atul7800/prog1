import React from 'react';
import './intro.css';

function Info(props)
{
return(
<div claaName="Prog1">

<div className="name">{props.name}</div>
<div className="address">{props.address}</div>
<div className="phoneno">{props.phoneno}</div>
<div className="age">{props.age}</div>
<div className="link">{props.link}</div>
</div>

);
}

export default Info;

