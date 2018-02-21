import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import api from '../Services/apis';

const defaultProps = {};
const propTypes = {};

const ServiceItem = ({
    name,
    value,
    checked,
    onChange
}) => {
    return (
        <label>
            <input type="checkbox" name={name} value={value} onChange={onChange} checked={checked} />
            {value}
        </label>
    );
};
const SelectedServiceItem = ({
    value
}) => {
    return (
        <li>
            {value}
        </li>
    );
};
class List extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        
        this.state = {
            services: [
                {
                    id: 1, 
                    serviceName: 'Home'
                },
                {
                    id: 2, 
                    serviceName: 'Calendar'
                },
                {
                    id: 3, 
                    serviceName: 'Contact'
                },
                {
                    id: 4, 
                    serviceName: 'Mail'
                },
                {
                    id: 5, 
                    serviceName: 'Message'
                }
            ]
        };
    }
    componentDidMount() {
        api.getServices()
        .then((selectedServices) => {
            this.setState({
                selectedServices
            });
        })
    }
    onChange(e) {
        const selectedServiceName = e.target.value;
        const selectedServices = _.xorBy(this.state.selectedServices, [{ serviceName: selectedServiceName }], 'serviceName');
        this.setState({
            selectedServices
        });
    }
    render() {
        const {
            onChange
        } = this;
        const {
            services,
            selectedServices
        } = this.state;
        return (
            <div>
                <div>
                    {
                        _.map(services, (service, key) => {
                            return (
                                <ServiceItem
                                    key={`services_${key}`}
                                    name="services"
                                    value={service.serviceName}
                                    checked={_.includes(_.map(selectedServices, 'serviceName'), service.serviceName)}
                                    onChange={onChange}
                                />
                            );
                        })
                    }
                </div>
                <ul>
                    {
                        _.map(selectedServices, (selectedService, key) => {
                            return (
                                <SelectedServiceItem
                                    key={`selectedServices_${key}`}
                                    value={selectedService.serviceName}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
List.defaultProps = defaultProps;
List.propTypes = propTypes;

export default List;