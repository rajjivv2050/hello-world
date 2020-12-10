import React,{Component} from 'react';
import TableData from './TableData';

class FragmentDemo extends Component{
    render()
    {
        return(
            <React.Fragment>
                <h1>React Fragment</h1>
                <p>This is a react fragment demo.</p>
                <table>
                    <tbody>
                        <tr>
                            <TableData></TableData>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default FragmentDemo