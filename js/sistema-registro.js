// Código JavaScript para manipular os formulários e exibir listas de pacientes e medicamentos.
const patientForm = document.getElementById('patient-form');
const medicationForm = document.getElementById('medication-form');
const patientList = document.getElementById('patient-list');
const medicationList = document.getElementById('medication-list');

patientForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const age = document.getElementById('age').value;
    const medicalHistory = document.getElementById('medical-history').value;

    // Aqui você pode salvar os dados do paciente em um banco de dados ou exibi-los na lista de pacientes.
    const patientInfo = `Nome: ${name}, CPF: ${cpf}, Data de Nascimento: ${age}, Histórico Médico: ${medicalHistory}`;
    const listItem = document.createElement('div');
    listItem.textContent = patientInfo;
    patientList.appendChild(listItem);

    // Limpa os campos do formulário
    patientForm.reset();
});

medicationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const medicationName = document.getElementById('medication-name').value;
    const dosage = document.getElementById('dosage').value;
    const frequency = document.getElementById('frequency').value;

    // Aqui você pode salvar os dados do medicamento em um banco de dados ou exibi-los na lista de medicamentos.
    const medicationInfo = `Nome do Medicamento: ${medicationName}, Dosagem: ${dosage}, Frequência: ${frequency}`;
    const listItem = document.createElement('div');
    listItem.textContent = medicationInfo;
    medicationList.appendChild(listItem);

    // Limpa os campos do formulário
    medicationForm.reset();
});
