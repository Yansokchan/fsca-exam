export interface QuestionAnswer {
  id: number;
  question: string;
  answer: string;
}

export const questionsData: QuestionAnswer[] = [
  {
    id: 1,
    question:
      "More cost effective and easier to deploy. Control actions are somewhat limited at remote",
    answer: "Centralized Deployments,",
  },
  {
    id: 2,
    question:
      "Customer needs to achieve different use cases in different site locations",
    answer: "Hybrid Deployments,",
  },
  {
    id: 3,
    question:
      "More expensive and lengthy to deploy. Has faster and more complete remediation / control ",
    answer: "Distributed Deployments",
  },
  {
    id: 4,
    question: "What is on the network?",
    answer: "Discovery",
  },
  {
    id: 5,
    question:
      "What should be done about non-compliant and unmanaged endpoints?",
    answer: "Control",
  },
  {
    id: 6,
    question: "Does the endpoint conform to your security standards?",
    answer: "Assess,",
  },
  {
    id: 7,
    question: "Is it manageable, who owns it, and what details do we know?",
    answer: "Classify",
  },
  {
    id: 8,
    question:
      "List some examples of things Forescout can discover about your network",
    answer:
      "Endpoint Presence, Endpoint Manageability,Endpoint Compliance Status",
  },
  {
    id: 9,
    question: "What are some device discovery methods?",
    answer: "Packet Engine, Query Switches, NetFlow",
  },
  {
    id: 10,
    question:
      "What does the “OT Premium Offering” add to the Forescout deployment?",
    answer:
      "Passive Network Monitoring, Dynamic Asset Map, Risk Management, Full Deep Packet Inspection",
  },
  {
    id: 11,
    question: "Which license is considered the ‘base’ Forescout license?",
    answer: "eyeSight",
  },
  {
    id: 12,
    question: "Enhanced IPS and related actions",
    answer: "Advantage",
  },
  {
    id: 13,
    question: "Potentially need more appliances",
    answer: "Disadvantage",
  },
  {
    id: 14,
    question: "More prone to errors if not configured properly",
    answer: "Disadvantage",
  },
  {
    id: 15,
    question: "Slightly longer installation time VLAN tagging (802.1q) enabled",
    answer: "Disadvantage",
  },
  {
    id: 16,
    question: "Lack of visibility of intra-VLAN (layer 2) traffic",
    answer: "Disadvantage,",
  },
  {
    id: 17,
    question:
      "Limits ActiveResponse functionality and related actions to inter- VLAN detection and blocking",
    answer: "Disadvantage",
  },
  {
    id: 18,
    question: "Quicker install time",
    answer: "Advantage",
  },
  {
    id: 19,
    question: "VLAN tagging is not required",
    answer: "Advantage",
  },
  {
    id: 20,
    question: "Potentially need fewer appliances",
    answer: "Advantage",
  },
  {
    id: 21,
    question:
      "Use for redundancy of a single appliance or EM. Deploy in the same rack",
    answer: "High Availability",
  },
  {
    id: 22,
    question:
      "Use to dynamically handle either single or multiple points of failure",
    answer: "Failover Clustering",
  },
  {
    id: 23,
    question:
      "Use for management redundancy, to provide for EM functions in case of failure",
    answer: "Recovery Manager",
  },
  {
    id: 24,
    question: "How are Segments used in policies?",
    answer: "Segments are used to set policy scope",
  },
  {
    id: 25,
    question: "How Many appliances can a single Enterprise Manager handle?",
    answer: "Up to 200 appliances",
  },
  {
    id: 26,
    question:
      "If you want to stop malicious activity within VLAN, which channel mode should you use?",
    answer: "Layer 2",
  },
  {
    id: 27,
    question:
      "Other than by writing policies, how can the functionality of the Forescout platform be extended?",
    answer:
      "By installing additional eyeExtend modules (including eyeSegment or the OT Premium Offering) or by deploying SecureConnector",
  },
  {
    id: 28,
    question: "To which appliance do you connect the console?",
    answer: "The Enterprise Manager",
  },
  {
    id: 29,
    question: "What is a Policy?",
    answer:
      "A set of instructions you give Forescout for identifying, analyzing and responding to a broad range of network activities for the purpose of ensuring network compliance and security",
  },
  {
    id: 30,
    question:
      "What is indicated by the last 2 digits of the 51xx appliance family?",
    answer: "Relative endpoint capacity of the appliance",
  },
  {
    id: 31,
    question: "What is the function of “Groups” in Forescout policies?",
    answer:
      "Groups allow like type devices to be put together to control policy flow",
  },
  {
    id: 32,
    question:
      "What is the name of the GUI application used for viewing and managing a Forescout deployment?",
    answer: "Console",
  },
  {
    id: 33,
    question:
      "What limitations exist when deploying Forescout in a virtualized environment?",
    answer:
      "All physical connections to the virtual eyeSight appliance must be replicated on all hosts",
  },
  {
    id: 34,
    question:
      "What virtualization hypervisors are supported for Forescout virtual machines?",
    answer: "Linux KVM, Vmware, Microsoft Hyper-V",
  },
  {
    id: 35,
    question:
      "Which resiliency configurations are not included with the basic eyeSight License?",
    answer:
      "HA and Failover Clustering of Forescout member appliances require the eyeRecover License.",
  },
  {
    id: 36,
    question: "Where can the installation files for the console be obtained? ",
    answer: "ALL",
  },
  {
    id: 37,
    question:
      "What type of information is necessary to complete the command line setup? ",
    answer:
      "Device Role info such as security feature, stand alone or EM, description and desired default password for cliadmin and admin accounts. Device Connectivity info such as DNS server, Hostname, IP address, mask, and default gateway",
  },
  {
    id: 38,
    question:
      "During the CLI setup both the Cliadmin and the admin accounts have their passwords set at the same time.",
    answer: "TRUE",
  },
  {
    id: 39,
    question: "Which may do all that admin may do except create other users",
    answer: "Operator",
  },
  {
    id: 40,
    question: "Which may create users and do all administrative tasks",
    answer: "CLIAdmin",
  },
  {
    id: 41,
    question:
      "Which my only view the configuration and may not make any changes at the CLI",
    answer: "User",
  },
  {
    id: 42,
    question:
      "This is the only account type which has permission to transfer files from CLI",
    answer: "SecureFTP",
  },
  {
    id: 43,
    question: "When in the FS-CLI shell, can I simply type the command line?",
    answer: "TRUE",
  },
  {
    id: 44,
    question:
      "What, short of adding another span session, do you think might help us to get additional information about devices to increase visibility and/or control in the Remote Office? ",
    answer:
      "DNS Enforce plugin, Configure IP Helper Address pointing to Forescout",
  },
  {
    id: 45,
    question: "They use the same password initially",
    answer: "Similar",
  },
  {
    id: 46,
    question: "Admin connects to the GUI and cliadmin to the console",
    answer: "Different in the access they provide",
  },
  {
    id: 47,
    question:
      "How can interface labels in the console and CLI be changed to conform to a standard or correct for changes introduced by deploying virtual machines?",
    answer:
      "Use the utility fstool ethtest to identify the network interfaces in order to rename them as desired",
  },
  {
    id: 48,
    question: "Can you skip steps of the Initial Setup Wizard?",
    answer: "TRUE",
  },
  {
    id: 49,
    question: "How do you obtain context sensitive command line help?",
    answer: `Type "help" either after an fstool utility or by itself to list fstool utilities`,
  },
  {
    id: 50,
    question:
      "All provisioned discovery methods are used but endpoints are NOT evaluated",
    answer: "Ignored Ips",
  },
  {
    id: 51,
    question:
      "Discovered using ONLY passive methods and are evaluated by policy",
    answer: "Passive Learning",
  },
  {
    id: 52,
    question: "The map view does require internet connectivity to Google Maps",
    answer: "Disadvantage",
  },
  {
    id: 53,
    question:
      "The map view give a single at-a-glance way to show overall compliance information.",
    answer: "Advantage",
  },
  {
    id: 54,
    question:
      "How can you customize and filter the information that is presented in the detections panel?",
    answer:
      "You can use the views and filter panes to control which hosts are displayed or add or remove columns to sort by.",
  },
  {
    id: 55,
    question: "How can you display an endpoint’s host information?",
    answer: "Double clicking an endpoint will bring up the Host Details.",
  },
  {
    id: 56,
    question:
      "How is the information presented on the Inventory tab different from that presented on the Home tab?",
    answer:
      "The Inventory tab presents the same information but organized around the criteria instead of the endpoint.",
  },
  {
    id: 57,
    question:
      "In what 3 ways can the Forescout database information be displayed without connecting to the console?",
    answer: "Assets Portal, Reports Portal, Dashboard Portal",
  },
  {
    id: 58,
    question:
      "On the Home Tab, when looking at the detected devices for a policy, how can you tell if there are any actions that have failed?",
    answer: `Look in the "Actions" column of the detections.`,
  },
  {
    id: 59,
    question: "What are groups primarily used for?",
    answer: "They control endpoints through the policy set.",
  },
  {
    id: 60,
    question:
      "What can you do on the Policy Tab that you cannot do on the Home Tab?",
    answer: "ALL",
  },
  {
    id: 61,
    question:
      "What implications need to be considered when making groups hierarchical?",
    answer: "ALL",
  },
  {
    id: 62,
    question: "What type of information does the status bar provide?",
    answer: "ALL",
  },
  {
    id: 63,
    question:
      "When filtering for endpoints on the home tab, what should you check if you're not getting the results you expect?",
    answer:
      "The selections in the Views and Filters pane along with the checkboxes across the top of the Detections pane.",
  },
  {
    id: 64,
    question: "Group names can be changed.",
    answer: "TRUE",
  },
  {
    id: 65,
    question: "How often by default does Forescout check for updates?",
    answer: "Every Hour",
  },
  {
    id: 66,
    question:
      "If the login credentials specified for the User Directory plugin do not allow you to bind to an AD server then what limitations will you encounter?",
    answer:
      "You won’t be able to resolve directory information (such as username, email, phone number, supervisor).",
  },
  {
    id: 67,
    question:
      "If you did not specify the correct service account credentials for the HPS plugin, how is Forescout limited?",
    answer: "You will be unable to manage Windows hosts in the network.",
  },
  {
    id: 68,
    question:
      "If you do not have write capabilities on a switch, will you still be able to execute switch-based actions for connected endpoints?",
    answer:
      "You can pull information from switches with RO credentials, but cannot take switch-based actions.",
  },
  {
    id: 69,
    question:
      "What happens if you do not assign all the defined Segments to an appliance?",
    answer:
      "You will have issues managing hosts with policy and Active Response.",
  },
  {
    id: 70,
    question: "What is the Device Profile Library (DPL) configuration page?",
    answer:
      "8 hours after the DPL is updated, potential changes are listed here.",
  },
  {
    id: 71,
    question:
      "What limitations will you experience if you did not specify authentication servers in Options > NAC > Authentication?",
    answer:
      "Policy checks for external authentication traffic will not be effective.",
  },
  {
    id: 72,
    question: `What types of control actions are available when operating in "Partial Enforcement" operating mode?`,
    answer: "Non Channel / Traffic Based Control Actions",
  },
  {
    id: 73,
    question:
      "What will you see on the Inventory tab of the console after configuring Segments, Internal Network, channels, and IP assignments but prior to writing any policies?",
    answer: `Only the properties selected in the "Default" and "Inventory" rules under Options > Discovery.`,
  },
  {
    id: 74,
    question:
      "Which 3 plugins/modules are essential to configure correctly for best visibility?",
    answer: "User Directory, Switch, HPS Inspection Engine",
  },
  {
    id: 75,
    question:
      "Why should extreme caution be used regarding the “Always apply classification updates” checkbox on the DPL configuration page?",
    answer:
      "Analysis of potential changes is no longer possible, but all changes to the Device Profile Library resulting from all future updates are always immediately applied.",
  },
  {
    id: 76,
    question: `What is the effect of configuring a Virtual Firewall policy action to "block all" traffic from a detected endpoint? Will all traffic be blocked?`,
    answer: "Not all traffic is blocked.",
  },
  {
    id: 77,
    question:
      "There are hundreds of Properties and Actions available for your use in policies. If you do not know the name of the property or action you wish to use, how do you find it?",
    answer: "Use the search field.",
  },
  {
    id: 78,
    question: "What are the 3 ways to add policies to the Console?",
    answer:
      "Import policy. Add a policy from a pre-built template, Build a custom policy from scratch.",
  },
  {
    id: 79,
    question: "By default, when will enabled policy actions start?",
    answer: "When the endpoint matches the rule with the configured action.",
  },
  {
    id: 80,
    question:
      "What options for matching multiple criteria do you have in the Basic view of the Condition box?",
    answer: "One is false, One is true",
  },
  {
    id: 81,
    question:
      "What action and what condition are used to control the flow of endpoints through the Forescout policy set?",
    answer:
      "The Member of Group Condition (or the Scope), The Add to Group Action",
  },
  {
    id: 82,
    question:
      "Indicate two roll out strategies which reduce causes of non-compliance while minimizing disruption to production environments?",
    answer: "Site by Site Roll Out, Policy by Policy Roll Out",
  },
  {
    id: 83,
    question:
      "What plugin is required to create a policy that dynamically adds values to lists? What else is needed?",
    answer: `The Advanced Tools Plugin must be running in order to see the "Add value to list" action.`,
  },
  {
    id: 84,
    question:
      "What part of a policy gives Forescout the ability to respond to, remediate or even control detected devices?",
    answer: "Actions",
  },
  {
    id: 85,
    question:
      "What is it called when an endpoint has no definitive answer for Forescout's property or condition query?",
    answer: "Irresolvable",
  },
  {
    id: 86,
    question: `It is possible for a policy to have no condition specified in the "Main Rule".`,
    answer: "TRUE",
  },
  {
    id: 87,
    question:
      "How do you configure Filters and Exceptions in the Policy Scope?",
    answer: "Click the Advanced button",
  },
  {
    id: 88,
    question: "What are the 2 triggers which cause Policy evaluation?",
    answer: "Admission Event, Policy Recheck Timer Expiration",
  },
  {
    id: 89,
    question:
      "How can you determine which policies have caused an endpoint to end up in a certain control policy?",
    answer: "Use the View Policy Flow tool from the Policy.",
  },
  {
    id: 90,
    question:
      "What endpoints are evaluated when the policy has no main rule condition specified?",
    answer:
      "All endpoints with IP addresses included by the scope will match the empty rule and be processed by the policy.",
  },
  {
    id: 91,
    question: `Why should you configure the "Evaluate Irresolvable criteria as" field in properties?`,
    answer:
      "The host is not checked against additional sub-rules and will “hide”",
  },
  {
    id: 92,
    question: "When might you use a policy that has no main rule conditions?",
    answer:
      "When you have selected all entrance criteria for the policy in the Scope.",
  },
  {
    id: 93,
    question: "What kind of statement is a main rule?",
    answer: "It is an IF-Then Condition and Action statement",
  },
  {
    id: 94,
    question:
      "If the network contains overlapping IP ranges can a policy scope still be defined?",
    answer: "Yes, if IP Reuse Domains have been configured.",
  },
  {
    id: 95,
    question:
      "What happens if the endpoint does not match any of the conditions specified by the sub-rules of the discover policy?",
    answer: `It will be identified as "unclassified.”`,
  },
  {
    id: 96,
    question:
      "Explain how to change a specific “Unclassified” endpoint as a new device type?",
    answer:
      "Manually create a new sub-rule and place it above the Unclassified endpoints sub-rule.",
  },
  {
    id: 97,
    question: `What type of devices should typically be added to the "Properties - Passive Learning" default group, especially when unsure how they will respond to active probing?`,
    answer:
      "OT devices should often be protected from Forescout's active scanning, at least until it is known how they will respond.",
  },
  {
    id: 98,
    question:
      "How will incorrect service account credentials configured in the HPS Inspection Engine affect the classification policies?",
    answer:
      "The Windows classification policy will not be able to determine which endpoints are manageable Windows devices.",
  },
  {
    id: 99,
    question: "What is the main goal of Classification policies?",
    answer: "To determine Manageability and Ownership of the detected device.",
  },
  {
    id: 100,
    question: "What are the four main Classification policies?",
    answer: "Windows, Macintosh, Linux, IoT",
  },
  {
    id: 101,
    question:
      "Think about what you know regarding SPAN traffic. How do you think classification policies might be affected when SPAN traffic is not a channel input?",
    answer:
      "Since you lose the ability to see raw traffic in the channel, you lose passive (event detection, traffic, etc.) classification capability.",
  },
  {
    id: 102,
    question:
      "What methods are available for Forescout to inspect managed Windows devices?",
    answer: "Remote Inspection credentials (WMI or RPC), SecureConnector",
  },
  {
    id: 103,
    question:
      "What happens if an assessment policy checks a non-manageable endpoint?",
    answer: "The endpoint’s compliance status will not be truly known.",
  },
  {
    id: 104,
    question: "What types of endpoints should be sent to Assessment policies?",
    answer:
      "Predominantly manageable devices should be sent to an assessment policy.",
  },
  {
    id: 105,
    question: "Can one mark endpoints running Notepad as non-compliant?",
    answer: "Yes, this is possible.",
  },
  {
    id: 106,
    question: "How do you categorize a policy as a compliance policy?",
    answer: `Click the "Categorize" button from the Policy Manager.`,
  },
  {
    id: 107,
    question:
      "What is required in order for an assessment policy to report (in the dashboard, or other reporting tools) endpoint as compliant or non-compliant?",
    answer: `The policy must be "Categorized" as a compliance policy.`,
  },
  {
    id: 108,
    question:
      "What actions or features require Full Enforcement mode in order to function properly?",
    answer: "ALL",
  },
  {
    id: 109,
    question:
      "If a device needs to be blocked from the network, what do you need to know about it in order to determine the best Control action?",
    answer: "How its connected to the network.",
  },
  {
    id: 110,
    question:
      "When a control action in a properly configured control policy fails to complete successfully, what should you check?",
    answer: "Enforcement Mode, Action Threshold",
  },
  {
    id: 111,
    question:
      "Based on what you know, what do you think would happen if a control policy to assign endpoints to a quarantine VLAN does not include the IP range of the quarantine VLAN in the scope?",
    answer:
      "The endpoint will be assigned to the quarantine VLAN, then it will no longer match the policy scope and so will revert back to the original VLAN.",
  },
  {
    id: 112,
    question:
      "What actions will be successful if you do not specify Full Enforcement operating mode? Assuming you have an eyeControl license, will you be able to restrict any endpoints in Partial Enforcement mode?",
    answer: "Switch and WLAN based actions should be successful.",
  },
  {
    id: 113,
    question:
      "What happens (in terms of host management) if the remote inspection option is not enabled in the Linux or Mac plugins?",
    answer: "Linux and Mac endpoints would not be manageable.",
  },
  {
    id: 114,
    question:
      "You can install SecureConnector as an application on a Linux endpoint.",
    answer: "FALSE",
  },
  {
    id: 115,
    question:
      "What methods are available for Forescout to inspect managed Windows devices?",
    answer: "ALL",
  },
  {
    id: 116,
    question:
      "What happens if the Windows endpoint does not have Remote Registry service running?",
    answer:
      "If all other required services / ports are present it will be manageable.",
  },
  {
    id: 117,
    question:
      "What do you see on the Dashboard if you have not run the Dashboard Policy Template?",
    answer: "The widgets will not contain any meaningful information.",
  },
  {
    id: 118,
    question:
      "When a certain set of columns is shown on the new Asset Portal, is the search feature limited to what is displayed in those columns?",
    answer: "No, it searches Forescout’s entire database for all host info",
  },
  {
    id: 119,
    question: `How do you get meaningful data from one of your custom policies to populate the "Applications Top 5 Widget" which appears by default on the Device Compliance tab of the Dashboard?`,
    answer: `From the Policy Manager, you must use the "Dashboard Tag" button to specify which sub-rules indicate an application issue.`,
  },
  {
    id: 120,
    question:
      "What happens if a compliance category is not assigned to a compliance policy?",
    answer:
      "The Dashboard will not be able to display a compliance graph for that policy.",
  },
  {
    id: 121,
    question:
      "What would happen in terms of the Asset Inventory if none of the policies are provisioned to discover connected USB devices?",
    answer:
      "Information about how many endpoints have connected USB devices will not be available.",
  },
  {
    id: 122,
    question:
      "You need to know which policy caused an action on a specific host. Which tab of the Host Details will have this information?",
    answer: "Use the “Policy Actions Tab”",
  },
  {
    id: 123,
    question:
      "What effect does the enforcement mode have on VLAN change actions, vFW actions, and HTTP Login actions?",
    answer: "Enforcement mode only affects vFW and HTTP actions.",
  },
  {
    id: 124,
    question:
      "How do the “Show all information” and the “Show Troubleshooting messages” buttons assist in troubleshooting?",
    answer: "ALL",
  },
  {
    id: 125,
    question:
      "Why should you narrow the focus of the Home Tab prior to reviewing the GUI logs in Forescout?",
    answer: "ALL",
  },
  {
    id: 126,
    question: "How are the Host log and the Policy log similar?",
    answer:
      "The policy log applies to multiple hosts., They both detail the steps the policy engine has gone through in the process of evaluating policy statements.",
  },
  {
    id: 127,
    question:
      "What other limiting factors should you consider when examining vFW and HTTP actions when in enforcement mode?",
    answer: "ALL",
  },
  {
    id: 128,
    question: "What tool tells you the policy flow of an endpoint?",
    answer:
      "Use the “View Policy Flow” link for the policy you are interested in.",
  },
  {
    id: 129,
    question:
      "What should you check if the HPS Inspection Engine is unable to connect to any assets?",
    answer:
      "Check the service account credentials configured for the HPS/remote inspection conditions on the endpoint.",
  },
  {
    id: 130,
    question: "How can you determine if HTTP actions were not successful?",
    answer: "By using the tcpdump command.",
  },
  {
    id: 131,
    question:
      "What happens if the http traffic from a specific endpoint (or an entire VLAN) is not included in the SPAN session configuration on the switch?",
    answer: "The HTTP actions will not be successful.",
  },
  {
    id: 132,
    question:
      "In order to configure a new administrative user with rights to log into the Forescout Console, what must you configure first?",
    answer:
      "The authentication settings for the login type that user will employ.",
  },
  {
    id: 133,
    question: "How do you initiate a manual backup?",
    answer: "From the Options > CounterACT Devices configuration page.",
  },
  {
    id: 134,
    question: "How can you restrict Console access to the appliance?",
    answer:
      "Go to Options > Access and configure IP addresses that will be able to access appliance.",
  },
  {
    id: 135,
    question:
      "How do you find Segments that have not been assigned to an appliance?",
    answer: "ALL",
  },
  {
    id: 136,
    question:
      "What Console user permission would be best for a Help Desk Technician?",
    answer: "Dashboard and all Assets Portal permissions.",
  },
];
