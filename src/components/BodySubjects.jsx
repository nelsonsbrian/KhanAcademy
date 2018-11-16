import React, { Component } from 'react';

class BodySubjects extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="objects">
            <style jsx>{`
                .objects{
                    background-color: #fafafa;
                    color: gray;
                }
                th:hover{
                    color: darkred;
                }
            
            `}</style>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Math</th>
                            <th>Science&engineering</th>
                            <th>Computing</th>
                            <th>Arts & humanities</th>
                            <th>Economics & finance</th>
                            <th>Test prep</th>
                            <th>Colledge, careers, & more</th>
                        </tr>
                    </thead>
                </table>
                
            </div>
         );
    }
}
 
export default BodySubjects;