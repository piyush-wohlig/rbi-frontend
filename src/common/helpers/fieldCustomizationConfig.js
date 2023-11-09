var customConfig = {
    "navigation_menu_fields": {
        "display": "Header Menu Fields",
        /*
         * is_visible will hide/show tabs in settings panel
         */
        "is_visible": true,
        "fields": {
            "motor_insurance": {
                /*
                 * is_visible is the default initializer to hide/show fields in employee view if key is not present in API response initially
                 * */
                "is_visible": false,
                "display": "Motor Insurance"
            },
            "access_to_tpa_site" :{
                "is_visible": false,
                "display": "Access to TPA Site"
            },
            "useful_health_links": {
                "is_visible": false,
                // "display": "Useful Health Links"
                "display": "Wellness Partner"
            },
            "useful_links": {
                "is_visible": false,
                "display": "Useful Links"
            },
            "account_and_float_statement": {
                "is_visible": false,
                "display": "Premium Account And Float Statement"
            },
            "corporate_claim_settlement": {
                "is_visible": false,
                "display": "Corporate Claim Settlement"
            },
            "voluntary_swipez_link": {
                "is_visible": false,
                "display": "Voluntary Swipez Link"
            },
            "health_calculators": {
                "is_visible": true,
                "display": "Health Calculators"
            },
            "gov_insurance_scheme": {
                "is_visible": false,
                "display": "Government Insurance Scheme"
            },
            "hospital_locator": {
                "is_visible": false,
                "display": "Hospital Locator"
            },
            "claim_ratio_chart": {
                "is_visible": false,
                "display": "Claim Ratio Chart"
            },
            "employee_dashboard_claimbox": {
                "is_visible": true,
                "display": "Employee Dashboard Claim Box"
            }}
    },
    "my_profile_fields": {
        "display": "Employee Profile View Fields",
        "field_type": "my_profile_fields",
        "fields": {
            "blood_group": {
                "is_visible": false,
                "display": "Blood Group"
            },
            "ifsc_code": {
                "is_visible": false,
                "display": "IFSC Code"
            },
            "bank_account_number": {
                "is_visible": false,
                "display": "Bank Account Number"
            },
            "pan": {
                "is_visible": false,
                "display": "PAN"
            },
            "aadhaar": {
                "is_visible": false,
                "display": "Aadhaar"
            },
            "personal_email": {
                "is_visible": false,
                "display": "Personal Email"
            },
            "bank_name": {
                "is_visible": false,
                "display": "Bank Name"
            },
            "employee_code": {
                "is_visible": false,
                "display": "Employee Code"
            },
            "employee_type": {
                "is_visible": false,
                "display": "Employee Type"
            },
            "department": {
                "is_visible": false,
                "display": "Department"
            },
            "location": {
                "is_visible": false,
                "display": "Location"
            },
            "corporate_email_id": {
                "is_visible": false,
                "display": "Corporate Email Id"
            },
            "date_of_joining": {
                "is_visible": false,
                "display": "Date Of Joining"
            },
            "corporate_admins_section": {
                "is_visible": false,
                "display": "Corporate Admins"
            },
            "location_admins_section": {
                "is_visible": false,
                "display": "Location Admins"
            }
        }
    }
    ,
    "voluntary_voting_screen_fields": {
        "display": "Voluntary Voting Screen Fields",
        "field_type": "voluntary_voting_screen_fields",
        "is_visible": true,
        allowedPolicyType: ["VOLUNTARY_GMC"],
        "fields": {
            "GMC": {},
            "GTL": {},
            "GPA": {},
            "VOLUNTARY_GMC": {
                "addon_is_mandatory": {
                    "is_visible": false,
                    "display": "Is Addon Mandatory"
                },
                "addon_is_single_select": {
                    "is_visible": false,
                    "display": "Single Select Addon"
                },
                "hide_premium_calculation_section": {
                    "is_visible": false,
                    "display": "Hide Premium Calculation Section"
                },
                "freeze_devote_option": {
                    "is_visible": false,
                    "display": "Freeze Devote Option"
                },
                "hide_age_option": {
                    "is_visible": false,
                    "display": "Hide Age Option"
                }
            }
        }
    }, "list_dependents_screen_fields": {
        "display": "List Dependents Screen Fields",
        "field_type": "list_dependents_screen_fields",
        "is_visible": true,
        allowedPolicyType: ['GMC', "VOLUNTARY_GMC"],
        "fields": {
            "GMC": {
                "show_gmc_topup_redirect_button": {
                    "is_visible": false,
                    "display": "Show GMC Topup Redirect Button"
                },
                "hide_exception_reason_column": {
                    "is_visible": false,
                    "display": "Hide Exception Reason Column"
                },
                "hide_age_option": {
                    "is_visible": false,
                    "display": "Hide Age Option"
                }
            },
            "GTL": {},
            "GPA": {},
            "VOLUNTARY_GMC": {
                "show_gmc_topup_redirect_button": {
                    "is_visible": false,
                    "display": "Show GMC Topup Redirect Button"
                },
                "hide_age_option": {
                    "is_visible": false,
                    "display": "Hide Age Option"
                },
                "hide_upload_certificate_option": {
                    "is_visible": false,
                    "display": "Hide Upload Certificate Option"
                }
            }
        }
    },
    "policy_view_fields": {
        "display": "Employee Policy View Fields",
        "field_type": "policy_view_fields",
        "is_visible": true,
        allowedPolicyType: ['GMC', 'GPA', 'GTL', "VOLUNTARY_GMC"],
        "fields": {
            "GMC": {
                "gmc_enrollment_end_date": {
                    "is_visible": false,
                    "display": "GMC Enrollment End Date"
                },
                "gmc_age_exception": {
                    "is_visible": false,
                    "display": "GMC Age Exception"
                },
                "gmc_family_floater": {
                    "is_visible": false,
                    "display": "GMC Family Floater"
                },
                "gmc_premium": {
                    "is_visible": false,
                    "display": "GMC Premium"
                },
                "policy_start_end_date": {
                    "is_visible": false,
                    "display": "Policy Start/End Date"
                },
                "insurance_company_name": {
                    "is_visible": false,
                    "display": "Insurance Company Name"
                },
                "insurance_company_branch_name": {
                    "is_visible": false,
                    "display": "Insurance Company Branch Name"
                },
                "policy_features": {
                    "is_visible": false,
                    "display": "Policy Features"
                },
                "gmc_addon_coverages": {
                    "is_visible": false,
                    "display": "Add On Coverages"
                },
                "exclusions": {
                    "is_visible": false,
                    "display": "Exclusions"
                },
                "tpa": {
                    "is_visible": false,
                    "display": "Third Party Administrator"
                },
                "policy_number": {
                    "is_visible": false,
                    "display": "Policy Number"
                },
                "gmc_sum_insured": {
                    "is_visible": false,
                    "display": "GMC Sum Insured"
                },
                "claim_intimation": {
                    "is_visible": false,
                    "display": "Claim Intimation"
                }
            },
            "GPA": {
                "policy_start_end_date": {
                    "is_visible": false,
                    "display": "Policy Start/End Date"
                },
                "insurance_company_name": {
                    "is_visible": false,
                    "display": "Insurance Company Name"
                },
                "insurance_company_branch_name": {
                    "is_visible": false,
                    "display": "Insurance Company Branch Name"
                },
                "policy_features": {
                    "is_visible": false,
                    "display": "Policy Features"
                },
                "gpa_addon_coverages": {
                    "is_visible": false,
                    "display": "Add On Coverages"
                },
                "exclusions": {
                    "is_visible": false,
                    "display": "Exclusions"
                },
                "policy_number": {
                    "is_visible": false,
                    "display": "Policy Number"
                },
                "gpa_addon_premium": {
                    "is_visible": false,
                    "display": "GPA Addon Premium"
                },
                "gpa_addon_sum_insured": {
                    "is_visible": false,
                    "display": "GPA Addon Sum Insured"
                }
            },
            "GTL": {
                "policy_start_end_date": {
                    "is_visible": false,
                    "display": "Policy Start/End Date"
                },
                "insurance_company_name": {
                    "is_visible": false,
                    "display": "Insurance Company Name"
                },
                "insurance_company_branch_name": {
                    "is_visible": false,
                    "display": "Insurance Company Branch Name"
                },
                "policy_features": {
                    "is_visible": false,
                    "display": "Policy Features"
                },
                "exclusions": {
                    "is_visible": false,
                    "display": "Exclusions"
                },
                "policy_number": {
                    "is_visible": false,
                    "display": "Policy Number"
                }
            },
            "VOLUNTARY_GMC": {
                "tpa_name": {
                    "is_visible": false,
                    "display": "TPA Name"
                },
                "tpa_contact_details": {
                    "is_visible": false,
                    "display": "TPA Contact Details"
                },
                "insurance_company_name": {
                    "is_visible": false,
                    "display": "Insurance Company Name"
                },
                "insurance_company_branch": {
                    "is_visible": false,
                    "display": "Insurance Company Branch Name"
                },
                "insurance_company_branch_code": {
                    "is_visible": false,
                    "display": "Insurance Company Branch/DO Code"
                },
                "insurance_company_branch_contact_details": {
                    "is_visible": false,
                    "display": "Insurance Company Branch Contact Details"
                },
                "lead_insurer_email": {
                    "is_visible": false,
                    "display": "Lead Insurer Email"
                },
                "lead_insurer_percentage_share": {
                    "is_visible": false,
                    "display": "Lead Insurer Percentage Share"
                },
                "co_insurer_name": {
                    "is_visible": false,
                    "display": "Co-Insurer(s) Name"
                },
                "co_insurer_share": {
                    "is_visible": false,
                    "display": "Co-Insurer(s) Share(%)"
                },
                "policy_number": {
                    "is_visible": false,
                    "display": "Policy Number"
                },
                "threshold_cut_off": {
                    "is_visible": false,
                    "display": "Threshold Cutoff"
                },
                "lockin_period": {
                    "is_visible": false,
                    "display": "Lock-In Period"
                },
                "tax_applicable": {
                    "is_visible": false,
                    "display": "Tax Applicable"
                },
                "voting_start_date": {
                    "is_visible": false,
                    "display": "Voting Start Date"
                },
                "voting_end_date": {
                    "is_visible": false,
                    "display": "Voting End Date"
                },
                "lockin_sum_insured_table": {
                    "is_visible": false,
                    "display": "Lock-In Sum Insured Table"
                },
                "policy_features": {
                    "is_visible": false,
                    "display": "Policy Features"
                },
                "addon_coverages": {
                    "is_visible": false,
                    "display": "AddOn Coverages"
                },
                "exclusions": {
                    "is_visible": false,
                    "display": "Exclusions"
                },
                "payment_related_fields": {
                    "is_visible": false,
                    "display": "Payment Information Related Fields"
                },
                "premium_amount": {
                    "is_visible": false,
                    "display": "Premium Amount"
                },
                "corporate_share": {
                    "is_visible": false,
                    "display": "Corporate Share"
                },
                "max_family_size": {
                    "is_visible": false,
                    "display": "Maximum Family Size"
                },
                "state": {
                    "is_visible": false,
                    "display": "State"
                },
                "city": {
                    "is_visible": false,
                    "display": "City"
                },
                "pincode": {
                    "is_visible": false,
                    "display": "Pincode"
                },
                "sum_insured_type": {
                    "is_visible": false,
                    "display": "Sum Insured Type"
                },
                "premium_type": {
                    "is_visible": false,
                    "display": "Premium Type"
                },
                "family_size_exceeded_upto": {
                    "is_visible": false,
                    "display": "Family Size Exceeded Upto"
                },
                "family_definition": {
                    "is_visible": true,
                    "display": "Family Definition"
                },
                "payment_sharing_type": {
                    "is_visible": false,
                    "display": "Payment Sharing Type"
                },
                "employee_dashboard_si_chart_only": {
                    "is_visible": false,
                    "display": "Hide Claims Data"
                },
                "alternative_relation_coverage": {
                    "is_visible": false,
                    "display": "Alternative Relation Coverage"
                },
                "claim_intimation": {
                    "is_visible": false,
                    "display": "Claim Intimation"
                }
            }
        }

    },
    "topup_policy_view_fields": {
        "display": "Topup Policy View Fields",
        "field_type": "topup_policy_view_fields",
        "is_visible": true,
        "fields": {
            "employee_topup_policy_view_premium_details": {
                "is_visible": false,
                "display": "Employee Premium Details"
            }
        }
    },
    "employee_dashboard_fields": {
        "display": "Employee Dashboard Fields",
        "field_type": "employee_dashboard_fields",
        "is_visible": true,
        "fields": {
            "employee_dashboard_si_chart_only": {
                "is_visible": false,
                "display": "Hide Claims Data"
            },
            "hide_wellness_tab": {
                "is_visible": true,
                "display": "Wellness Tab"
            }
        }
    }
};
export default customConfig;