import React from 'react';
import './qualification.css';
const Qualification = (props) => {
return (
<React.Fragment>
<h2>QUALIFICATION</h2>
<table className="qualification">
<thead className="qualification-headers">
<tr>
<th>SNo</th>
<th>College</th>

<th>Degree</th>
<th>Marks (cgpa)</th>
</tr>
</thead>
<tbody className="qualification-body">
{props.qualification.map((item, index) => {
return (
<tr key={index}>
<td>{item.SNo}</td>
<td>{item.College}</td>
<td>{item.Degree}</td>
<td>{item.Marks}</td>
</tr>
)
})
}
</tbody>
</table>
</React.Fragment>
)
}
export default Qualification;