import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import upcoming from '../Photos/Upcoming.jpg';

class UpcomingEvent extends React.Component {
    render() {
        return (
            <>
                <Header />

                <div className="position-relative" style={{ height: '400px' }}>
                    <img src={upcoming} className="img-fluid" alt="..." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                        <h1 className="display-4"><b>Upcoming Music Events India</b></h1>
                    </div>
                </div>


                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-primary">
                            <th scope="row">1</th>
                            <td>VH1 Supersonic Takeover 2024</td>
                            <td> 16th-18th February, 2024</td>
                            <td>Novotel Hyderabad Airport, R. Gandhi International Airport, Shamshabad, Hyderabad, Telangana 500108, India</td>
                        </tr>
                        <tr class="table-secondary">
                            <th scope="row">2</th>
                            <td>Hornbill</td>
                            <td> 5- 15 December, 2024</td>
                            <td>Nagaland</td>
                        </tr>
                        <tr class="table-success">
                            <th scope="row">3</th>
                            <td>Magnetic Fields</td>
                            <td>TBA,  2024</td>
                            <td> Rajasthan</td>
                        </tr>
                        <tr class="table-danger">
                            <th scope="row">4</th>
                            <td>Ziro</td>
                            <td>Takes place in September</td>
                            <td>Held at an altitude of 5,500 feet in Ziro valley,Arunachal Pradesh's </td>
                        </tr>
                        <tr class="table-warning">
                            <th scope="row">5</th>
                            <td>Ragasthan</td>
                            <td>Three-day musical gala that renders an exhilarating experience of camping</td>
                            <td>Jaisalmer</td>
                        </tr>
                        <tr class="table-info">
                            <th scope="row">6</th>
                            <td>Mahindra Blues</td>
                            <td> 10-11 February, 2024</td>
                            <td>Mumbai</td>
                        </tr>
                        <tr class="table-light">
                            <th scope="row">7</th>
                            <td>Storm</td>
                            <td>Held in January </td>
                            <td>Bangalore</td>
                        </tr>
                        <tr class="table-dark">
                            <th scope="row">8</th>
                            <td>NH7 Weekender </td>
                            <td>TBA, 2024</td>
                            <td>Pune, Bangalore, Kolkata and Delhi</td>
                        </tr>
                        <tr class="table-primary">
                            <th scope="row">9</th>
                            <td>Jodhpur Riff</td>
                            <td> 16th - 20th October, 2024</td>
                            <td> Mehrangarh Fort in Jodhpur</td>
                        </tr>
                        <tr class="table-secondary">
                            <th scope="row">10</th>
                            <td>Escape</td>
                            <td>A few days and chose a resort in the Himalayas to spend their days</td>
                            <td>Naukuchiatal ,Nainital</td>
                        </tr>
                        <tr class="table-success">
                            <th scope="row">11</th>
                            <td>Fireflies</td>
                            <td> Representing an amalgamation of western jazz with tribal folk music, reputed and less known artists perform together on a single stage from 7:00 PM to 7:00 AM</td>
                            <td>Bangalore</td>
                        </tr>
                        <tr class="table-danger">
                            <th scope="row">12</th>
                            <td>Sula Fest</td>
                            <td> 2nd - 5th February, 2024</td>
                            <td>Nasik</td>
                        </tr>
                        <tr class="table-warning">
                            <th scope="row">13</th>
                            <td>Rang</td>
                            <td>Same day as Holi, 25th March </td>
                            <td>New Delhi</td>
                        </tr>
                        <tr class="table-info">
                            <th scope="row">14</th>
                            <td>Kasauli Rhythm</td>
                            <td> April</td>
                            <td> Kasauli</td>
                        </tr>
                        <tr class="table-light">
                            <th scope="row">15</th>
                            <td>Shiva Squad Festival</td>
                            <td>September</td>
                            <td>Manali</td>
                        </tr>
                        <tr class="table-dark">
                            <th scope="row">16</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr class="table-primary">
                            <th scope="row">17</th>
                            <td>GoMad Fest</td>
                            <td>October</td>
                            <td>Ooty</td>
                        </tr>
                        <tr class="table-secondary">
                            <th scope="row">18</th>
                            <td>Holi Cow</td>
                            <td> 25th March, 2024</td>
                            <td>New Delhi</td>
                        </tr>
                        <tr class="table-success">
                            <th scope="row">19</th>
                            <td>Woods Talk</td>
                            <td> The Woods Talk Festival follows the concept of camping music festivals observed in European countries</td>
                            <td>Rishikesh</td>
                        </tr>
                        <tr class="table-danger">
                            <th scope="row">20</th>
                            <td> Mood Indigo</td>
                            <td> December</td>
                            <td> IIT Bombay</td>
                        </tr>
                        <tr class="table-warning">
                            <th scope="row">21</th>
                            <td> Gulmarg Winter Fest</td>
                            <td>21st January, 2024</td>
                            <td>Kashmir</td>
                        </tr>
                        <tr class="table-info">
                            <th scope="row">22</th>
                            <td>Tansen Music Festival</td>
                            <td>TBA, 2024</td>
                            <td> Gwalior</td>
                        </tr>
                        <tr class="table-light">
                            <th scope="row">23</th>
                            <td>Enchanted Valley Carnival</td>
                            <td> December</td>
                            <td> Pune</td>
                        </tr>
                        <tr class="table-dark">
                            <th scope="row">24</th>
                            <td>Road to Ultra, Mumbai, Delhi</td>
                            <td> 22nd- 24th March, 2024</td>
                            <td>Ultra, Mumbai, Delhi</td>
                        </tr>
                        <tr class="table-primary">
                            <th scope="row">25</th>
                            <td> Go: Madras</td>
                            <td>September each year</td>
                            <td>Mahabalipuram</td>
                        </tr>
                        <tr class="table-secondary">
                            <th scope="row">26</th>
                            <td>Puravankara Indigo and Blues Festival</td>
                            <td>September</td>
                            <td> Bangalore</td>
                        </tr>
                    </tbody>
                </table>
                <Footer />
            </>
        )
    }
}

export default UpcomingEvent;