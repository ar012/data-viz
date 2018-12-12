CREATE OR REPLACE PROCEDURE proc_delete_company(companycode character varying) 
LANGUAGE SQL  
AS $$
	DELETE FROM aa_settings WHERE company_code=companycode;
	DELETE FROM ac_audit_trails WHERE company_code=companycode;
	DELETE FROM ac_domains WHERE company_code=companycode;
	DELETE FROM ac_emp_modules WHERE company_code=companycode;
	DELETE FROM ac_emp_modules_new WHERE company_code=companycode;
	DELETE FROM ac_emp_privgroups WHERE company_code=companycode;
	DELETE FROM ac_emp_privgroups_new WHERE company_code=companycode;
	DELETE FROM ac_emp_privs WHERE company_code=companycode;
	DELETE FROM ac_emp_privs_new WHERE company_code=companycode;
	DELETE FROM ac_emp_privs_wip WHERE company_code=companycode;
	
	
$$;


CALL proc_delete_company('IMC');

SELECT company_code FROM ac_domains;





_templates
_templates_wip

aa_settings
ac_audit_trails
ac_domains
ac_emp_modules
ac_emp_modules_new
ac_emp_privgroups
ac_emp_privgroups_new
ac_emp_privs
ac_emp_privs_new
ac_emp_privs_wip
ac_emp_roles
ac_emp_roles_wip
ac_emp_suites
ac_emp_suites_new
ac_hbac_login
ac_hbac_mods
ac_hbac_privs
ac_login_histories
ac_online_users
ac_policy
ac_privrequests
ac_privrequests_new
ac_privrequests_wip
ac_privrequests_wip_new
ac_rbac_privs
ac_rbac_privs_wip
ac_rbac_profiles
ac_rbacs
ac_rbacs_wip
ac_role_privs
ac_role_privs_wip
ac_roles
ac_roles_wip
ac_settings
ac_tbac_login
ac_tbac_mods
ac_tbac_privs
ac_users
ac_users_wip
ap_advance_adjust_details
ap_advance_adjust_details_wip
ap_advance_adjusts
ap_advance_adjusts_wip
ap_advance_details
ap_advance_details_wip
ap_advances
ap_advances_wip
ap_debit_memo_details
ap_debit_memo_details_wip
ap_debit_memos
ap_debit_memos_wip
ap_invoice_details
ap_invoice_details_wip
ap_invoices
ap_invoices_wip
ap_journal_details
ap_journals
ap_payment_deductions
ap_payment_deductions_wip
ap_payment_details
ap_payment_details_wip
ap_payments
ap_payments_wip
ap_settings
ap_tax_slabs
application_kpis
ar_collections
ar_collections_details
ar_collections_details_wip
ar_collections_wip
ar_invoice_details
ar_invoice_details_wip
ar_invoices
ar_invoices_wip
ar_journal_details
ar_journals
ar_settings
ar_transaction_details
ar_transaction_details_wip
ar_transactions
ar_transactions_wip
bi_biz_daily_metrics
bi_biz_metrics
bi_biz_metrics_daily_perf
bi_biz_metrics_monthly_perf
bi_biz_metrics_quarterly_perf
bi_biz_metrics_userwise
bi_biz_metrics_weekly_perf
bi_biz_metrics_yearly_perf
bi_business_metrics
bi_emp_biz_metrics
bi_settings
cca_costcenters
cca_costcenters_temp
cca_costcenters_wip
cca_internal_orders
cca_internal_orders_wip
cca_settings
chn_settings
clc_business_lines
clc_business_lines_wip
clc_customer_accounts
clc_customer_sites
clc_customer_sites_wip
clc_customers
clc_customers_wip
clc_cutomer_business_lines
clc_cutomer_business_lines_wip
clc_cutomers
clc_cutomers_wip
clc_partner_sub_categories
clc_partners
clc_partners_wip
clc_settings
cm_assign_compliance_action_plans
cm_assign_compliance_responsibilitys
cm_clause_controls_detail
cm_clause_output_documents
cm_departments
cm_milestons
cm_reg_clause_guidance
cm_reg_clause_tests
cm_reg_clauses
cm_reg_sections
cm_reg_sub_section_guidance
cm_reg_sub_section_tests
cm_reg_sub_sections
cm_regulations
cm_regulators
cm_regulators_new
cp_settings
csd_settings
ctax_slabs
ctrl_function
db_settings
dms_documents
dms_documents_wip
dms_settings
dp_settings
dps_settings
ed_settings
fa_settings
fbc_settings
ffs_settings
flt_settings
ft_settings
gl_acc_auth_group_accounts
gl_acc_auth_group_users
gl_acc_auth_group_users_wip
gl_acc_authorization_groups
gl_acc_categories
gl_acc_groups
gl_acc_subcategories
gl_acc_subgroups
gl_acc_subgroups_controls
gl_acc_subgroups_risks
gl_account_controls
gl_account_controls_wip
gl_account_risks
gl_account_risks_wip
gl_accounts
gl_accounts_temp
gl_accounts_wip
gl_balance_acc_branch_period
gl_balance_acc_branch_qtr
gl_balance_acc_branch_yr
gl_balance_acc_cat_branch_period
gl_balance_acc_cat_branch_qtr
gl_balance_acc_cat_branch_yr
gl_balance_acc_cat_pc_period
gl_balance_acc_cat_pc_qtr
gl_balance_acc_cat_pc_yr
gl_balance_acc_cat_period
gl_balance_acc_cat_project_period
gl_balance_acc_cat_project_qtr
gl_balance_acc_cat_project_yr
gl_balance_acc_cat_qtr
gl_balance_acc_cat_sbu_period
gl_balance_acc_cat_sbu_qtr
gl_balance_acc_cat_sbu_yr
gl_balance_acc_cat_yr
gl_balance_acc_grp_branch_period
gl_balance_acc_grp_branch_qtr
gl_balance_acc_grp_branch_yr
gl_balance_acc_grp_pc_period
gl_balance_acc_grp_pc_qtr
gl_balance_acc_grp_pc_yr
gl_balance_acc_grp_period
gl_balance_acc_grp_project_period
gl_balance_acc_grp_project_qtr
gl_balance_acc_grp_project_yr
gl_balance_acc_grp_qtr
gl_balance_acc_grp_sbu_period
gl_balance_acc_grp_sbu_qtr
gl_balance_acc_grp_sbu_yr
gl_balance_acc_grp_yr
gl_balance_acc_pc_period
gl_balance_acc_pc_qtr
gl_balance_acc_pc_yr
gl_balance_acc_period
gl_balance_acc_project_period
gl_balance_acc_project_qtr
gl_balance_acc_project_yr
gl_balance_acc_qtr
gl_balance_acc_sbu_period
gl_balance_acc_sbu_qtr
gl_balance_acc_sbu_yr
gl_balance_acc_subcat_branch_period
gl_balance_acc_subcat_branch_qtr
gl_balance_acc_subcat_branch_yr
gl_balance_acc_subcat_pc_period
gl_balance_acc_subcat_pc_qtr
gl_balance_acc_subcat_pc_yr
gl_balance_acc_subcat_period
gl_balance_acc_subcat_project_period
gl_balance_acc_subcat_project_qtr
gl_balance_acc_subcat_project_yr
gl_balance_acc_subcat_qtr
gl_balance_acc_subcat_sbu_period
gl_balance_acc_subcat_sbu_qtr
gl_balance_acc_subcat_sbu_yr
gl_balance_acc_subcat_yr
gl_balance_acc_subgrp_branch_period
gl_balance_acc_subgrp_branch_qtr
gl_balance_acc_subgrp_branch_yr
gl_balance_acc_subgrp_pc_period
gl_balance_acc_subgrp_pc_qtr
gl_balance_acc_subgrp_pc_yr
gl_balance_acc_subgrp_period
gl_balance_acc_subgrp_project_period
gl_balance_acc_subgrp_project_qtr
gl_balance_acc_subgrp_project_yr
gl_balance_acc_subgrp_qtr
gl_balance_acc_subgrp_sbu_period
gl_balance_acc_subgrp_sbu_qtr
gl_balance_acc_subgrp_sbu_yr
gl_balance_acc_subgrp_yr
gl_balance_acc_yr
gl_ctax_account_mapping
gl_ctax_codes
gl_currencies
gl_currency_exrates
gl_currency_exrates_wip
gl_day_close_activities
gl_day_close_activity_details
gl_geographic_segments
gl_inter_coy_journals
gl_inter_coy_journals_wip
gl_period_close_activities
gl_posting_periods
gl_product_segments
gl_settings
gl_settings_clients
gl_tb_acc_year
gl_transaction_attachments
gl_transaction_details
gl_transaction_details_wip
gl_transaction_single_config_details
gl_transaction_single_config_details_wip
gl_transaction_single_configs
gl_transaction_single_configs_wip
gl_transaction_type_users
gl_transaction_types
gl_transactions
gl_transactions_wip
gl_voucher_types
gl_vouchertype_transactiontypes
gl_week_close_activities
gl_year_close_activities
gl_year_close_activity_details
grc_audit_sections
grc_audit_sections_wip
grc_audit_tracks
grc_audit_tracks_wip
grc_audits
grc_audits_wip
grc_map_data
grc_risks
hbc_settings
hd_company_privrequests
hd_company_privrequests_wip
hd_settings
hr_areas
hr_bands
hr_branch_details
hr_branch_details_wip
hr_branches
hr_branches_wip
hr_buildings
hr_canvas
hr_clients
hr_companies
hr_departments
hr_departments_wip
hr_divisions
hr_divisions_wip
hr_employee_attachment_types
hr_employee_attachments
hr_employee_awards
hr_employee_educations
hr_employee_educations_wip
hr_employee_experiences
hr_employee_families
hr_employee_families_wip
hr_employee_training
hr_employee_transfers
hr_employees
hr_employees_basic
hr_employees_wip
hr_employment_types
hr_floors
hr_glcode_maps
hr_gradecats
hr_grades
hr_jobs
hr_jobs_wip
hr_jobs_wip_old
hr_levels
hr_locations
hr_locations_temp
hr_messages
hr_noticeboard
hr_noticeboard_details
hr_noticeboard_details_wip
hr_noticeboard_wip
hr_report_settings
hr_roles
hr_roles_temp
hr_roles_wip
hr_sbu
hr_sbu_wip
hr_seats
hr_steps
hr_users
ia_audit_activities
ia_audit_clients
ia_audit_clients_branches
ia_audit_controls
ia_audit_data_requirements
ia_audit_guest_auditors
ia_audit_report_distribution
ia_audit_risks
ia_audit_sections
ia_audit_teams
ia_audit_test_procedures
ia_audits
ia_audits_primary_auditee_managers
ia_audits_wip
ia_settings
ic_cmm_action_details
ic_cmm_action_heads
ic_cmm_level_details
ic_cmm_level_heads
ic_cmm_levels
ic_control_activities
ic_control_areas
ic_control_assessments
ic_control_functions
ic_control_groups
ic_control_grp_details
ic_control_grp_masters
ic_fdoa
inf_settings
internal_control
inv_item_cat
inv_item_gr
inv_item_subcat
inv_item_subgr
inv_items
maintain_compliance_levels
migrations
mkt_settings
mlc_settings
mps_settings
my_dashboards
nms_airport
nms_border
nms_bts
nms_bts_new
nms_sites
ops_code_of_conducts
ops_correspondence
ops_emp_survey_answer_details
ops_emp_survey_question_summary
ops_emp_survey_summary
ops_orientation_exam_records
ops_promotion_records
ops_promotion_records_wip
ops_q_for_exam
ops_qd_for_exam
ops_qdo_for_exam
ops_qe_record_detail_drafts
ops_qe_record_detail_option_drafts
ops_qe_record_detail_options
ops_qe_record_details
ops_qe_record_drafts
ops_qe_records
ops_questionnaire_detail_options
ops_questionnaire_detail_options_wip
ops_questionnaire_details
ops_questionnaire_details_wip
ops_questionnaires
ops_questionnaires_wip
ops_settings
ops_transfer_records
ops_transfer_records_wip
ops_whistle_blowing
ops_whistle_blowing_drafts
pa_settings
password_resets
pc_settings
pca_profitcenters
pca_profitcenters_wip
pca_settings
pf_account_cat
pf_account_gr
pf_account_subcat
pf_account_subgr
pf_accounts
pf_contribution
pf_contribution_details
pf_contribution_temp
pf_journals
pf_journals_det
pf_settings
pf_transac_types
pf_voucher_types
plc_product_bundle_types
plc_product_colors
plc_product_divisions
plc_product_sizes
plc_settings
pm_activities
pm_activities_wip
pm_activity_deliverables
pm_activity_deliverables_wip
pm_activity_groups
pm_activity_groups_wip
pm_billing_plans
pm_billing_plans_wip
pm_portfolios
pm_portfolios_wip
pm_programs
pm_programs_old
pm_programs_wip
pm_project_deliverables
pm_project_deliverables_wip
pm_project_milestones
pm_project_milestones_wip
pm_projects
pm_projects_temp
pm_projects_wip
pm_rascies
pm_rascies_wip
pm_settings
pm_wbs_deliverables
pm_wbs_deliverables_wip
pm_wbses
pm_wbses_wip
pms_competencies
pms_corp_values
pms_settings
po_order_details
po_orders
po_orders_det
po_pr
po_pr_det
po_settings
po_supplier_gl_codes
po_suppliers
pr_bank_adv_payref
pr_bank_advice
pr_company_exp
pr_company_exp_comp
pr_company_exp_sum
pr_component_settings
pr_deduction_calculation_methods
pr_deduction_component_formulas
pr_deduction_formulas
pr_deduction_methods
pr_emp_sal_brkdn
pr_emp_sal_log
pr_emp_sal_log_sum
pr_employee_deductionrequests_wip
pr_employee_deductions
pr_employee_deductions_wip
pr_employee_salaries
pr_employee_salaries_wip
pr_employee_sale_years
pr_gradeconf
pr_gradeconf_det
pr_loans_adv
pr_oh_alloc_ratio
pr_oh_alloc_ratio_cc
pr_payroll_batch
pr_payroll_batches
pr_payroll_batches_wip
pr_payroll_batchs
pr_payroll_details
pr_payroll_details_wip
pr_payroll_master
pr_payroll_masters
pr_payroll_masters_wip
pr_payroll_settings
pr_salary
pr_salary_calculation_methods
pr_salary_cert
pr_salary_certifiers
pr_salary_comp
pr_salary_comp_gl_acc_no
pr_salary_comp_relation
pr_salary_comp_yr
pr_salary_component_formulas
pr_salary_components
pr_salarycomponent_companies
pr_salcomp_glacc
pr_settings
prd_settings
qms_settings
ques_bank
ra_settings
rm_activitys
rm_assessment_attachments
rm_biz_proc_risk_assessment
rm_business_risk_control_details
rm_business_risk_kri_details
rm_business_risks
rm_imapct_types
rm_kris
rm_likelihood_levels
rm_risk_categories
rm_risk_impact_definitions
rm_risk_levels
rm_risk_owners
rm_risk_sub_categories
rm_risks
rm_settings
robi_map
rp_settings
sa_global_settings
sa_settings
salesperson
sbc_settings
sd_settings
sem_business_goals
sem_settings
sms_settings
sod_common_risks
sod_matrix_config
sod_matrix_controls
sod_matrix_risks
sop_distribution_channels
sop_loading_point
sop_market_routes
sop_sales_groups
sop_sales_offices
sop_sales_org
sop_sales_regions
sop_sales_territories
sop_sales_zone
sop_settings
sop_shipping_offices
sys_attachment_types
sys_auto_numbers
sys_configs
sys_countries
sys_database_users
sys_databases
sys_document_numbers
sys_file_attachment_names
sys_fiscal_years
sys_industry_sectors
sys_merge_codes
sys_modules
sys_modules_new
sys_object_types
sys_osusers
sys_otps
sys_priv_dev_status
sys_privgroups
sys_privgroups_new
sys_privs
sys_privs_new
sys_privs_old
sys_production_estimate_cost
sys_report_formats
sys_sprints
sys_suites
sys_suites_new
sys_task_remaining_hours
sys_task_spent_hours
sys_tasks
sys_ui_feedbacks
sys_user_story_details
sys_user_storys
sys_workflow_status
ta_settings
tax_settings
test_results
test_results_det
tm_attendance
tm_attendance_daily_in_out
tm_daily_attendance
tm_holidays
tm_leave_applications
tm_leave_applications_wip
tm_leave_cancel
tm_leave_cancel_wip
tm_leave_journal_requests
tm_leave_journal_requests_wip
tm_leave_journals
tm_leave_journals_wip
tm_leave_type_companies
tm_leave_types
tm_office_time_companies
tm_office_times
tm_project_rate_details
tm_project_rate_details_wip
tm_project_rate_masters
tm_project_rate_masters_wip
tm_project_rates
tm_project_rates_wip
tm_settings
tm_timesheet_daily_summary_details
tm_timesheet_daily_summary_details_wip
tm_timesheet_daily_summary_masters
tm_timesheet_daily_summary_masters_wip
tm_timesheet_monthly_summary_details
tm_timesheet_monthly_summary_details_wip
tm_timesheet_monthly_summary_masters
tm_timesheet_monthly_summary_masters_wip
tm_timesheet_project_assign
tm_timesheet_timesheet_highoffice
tm_timesheet_timesheet_leave
tm_timesheet_timesheet_projects
tm_timesheet_timesheet_summary_table
tm_timesheet_timesheet_taskundertaken
tm_weekends
treg_reports_subscribers
treg_reports_subscribers_details
treg_reports_subscribers_details_wip
treg_reports_subscribers_wip
treg_subscribers_type_definitions
trv_settings
try_bank_accounts
try_bank_branches
try_banks
try_cash_books
try_cash_books_wip
try_cheque_book_leaves
try_cheque_book_leaves_wip
try_cheque_books
try_cheque_books_wip
try_company_bank_account_compliances
try_company_bank_accounts
try_company_bank_accounts_wip
try_employee_bank_accounts
try_employee_bank_accounts_wip
try_mfs
try_settings
ts_day_det
ts_day_sum
tt_emp_children
tt_emp_fvisits
tt_emp_income
tt_emp_invst
tt_emp_invst_det
tt_emp_invst_particulars
tt_emp_lifestyle
tt_emp_prop_income
tt_emp_properties
tt_emp_wealth
tt_fiscal_years
tt_income_years
tt_invst
tt_options
tt_prop_particulars
tt_returns
tt_salary_circles
tt_tax_calculation
tt_tax_challan
tt_tax_challan_det
tt_tax_circles
tt_tax_components
tt_tax_exemption_policy
tt_tax_options
tt_tax_slabs
tt_tax_slabs_nonresidential
tt_tax_slabs_old
tt_tax_slabs_residential
tt_tax_slabs_women
tt_tax_summary
tt_tax_zones
tt_wealth_flow
vlc_settings
vlc_supplier_accounts
vlc_supplier_accounts_wip
vlc_supplier_categories
vlc_supplier_sites
vlc_supplier_sites_wip
vlc_suppliers
vlc_suppliers_wip
vss_settings
wf_business_process
wf_business_process_company
wf_business_process_details
wf_doatypes
wf_message_templates
wf_process_chains
wf_settings
wf_workflow_details
wf_workflow_records
wf_workflow_status
wf_workflows
wh_settings
wppf_settings
ww_settings










select * from information_schema.tables where table_schema='public';