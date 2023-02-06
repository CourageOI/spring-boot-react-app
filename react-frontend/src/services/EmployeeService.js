import axios from 'axios';

class EmployeeService {

    getEmployees(){
        return axios.get('http://localhost:8020/employes/all');
    }

    createEmployee(employee){
        return axios.post('http://localhost:8020/employes/create', employee);
    }

    getEmployeeById(employeeId){
        return axios.get('http://localhost:8020/employes/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put('http://localhost:8020/employes/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete('http://localhost:8020/employes/' + employeeId);
    }
}

export default new EmployeeService()