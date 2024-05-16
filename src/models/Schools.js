const QBO = require('../libs/QBOSchools')

class Schools{   
}

QBO.record_class_init(Schools);
QBO.save_undefined_as_empty = true;
Schools.alias = '_DBID_SCHOOL';
Schools.db_map = [
    {fid: '1', name: 'date_created', field_type: 'date/time'},
    {fid: '2', name: 'date_modified', field_type: 'date/time'},
    {fid: '3', name: 'rid', field_type: 'number'},
    {fid: '4', name: 'record_owner', field_type: 'user'},
    {fid: '6', name: 'school_name', field_type: 'text'},
    {fid: '7', name: 'school_address', field_type: 'address'},
    {fid: '14', name: 'school_phone_number', field_type: 'phone'},
    {fid: '15', name: 'school_email', field_type: 'email'},
    {fid: '16', name: 'school_type', field_type: 'text-multiple-choice'},
    {fid: '17', name: 'school_url', field_type: 'url'},
    {fid: '18', name: 'school_status', field_type: 'text-multiple-choice'},
    {fid: '19', name: 'school_grades', field_type: 'multitext'},
    {fid: '20', name: 'school_close_date', field_type: 'date'},
    {fid: '21', name: 'school_open_date', field_type: 'date'},
];

module.exports = Schools;