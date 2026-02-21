// =============================================================
// TTSH Caregiver Resources — Data Store
// Source: Tan Tock Seng Hospital (www.ttsh.com.sg)
// Last updated: February 2026
// =============================================================

const RESOURCES = {
  pillars: [

    // ── PILLAR 1: FOR YOURSELF ────────────────────────────────
    {
      id: "for-yourself",
      label: "For Yourself",
      tagline: "Caring for the caregiver",
      description: "You cannot pour from an empty cup. These resources support your physical, mental, and emotional wellbeing so you can continue to care.",
      color: "#E8763A",
      icon: "heart-handshake",
      subcategories: [

        {
          id: "physical-wellbeing",
          label: "Physical Wellbeing",
          description: "Exercise routines, hygiene, sleep, and staying active while managing caregiving demands.",
          resources: [
            {
              title: "A Stronger You Formula",
              description: "Structured exercise programme for adults — standard and pre-frail versions available.",
              tags: ["exercise", "frailty prevention"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/physical-well-being.aspx"
            },
            {
              title: "Stay Home, Stay Active",
              description: "Home-based exercise routines for active adults, homebound adults, and young adults.",
              tags: ["exercise", "home-based"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/physical-well-being.aspx"
            },
            {
              title: "Prevention of Lower Back Pain",
              description: "Practical exercises and posture guidance to prevent back injury during caregiving tasks.",
              tags: ["back pain", "posture"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/physical-well-being.aspx"
            },
            {
              title: "Safe Lifting Techniques",
              description: "Occupational therapy guidance on lifting and transferring patients safely to protect your body.",
              tags: ["lifting", "occupational therapy"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/living-well.aspx"
            },
            {
              title: "Poor Sleeping — What You Should Know",
              description: "Around 44% of Singaporeans lack sufficient weekday sleep. Guidance on improving sleep quality.",
              tags: ["sleep", "rest"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/physical-well-being.aspx"
            },
            {
              title: "Basic Oral Health & Hand Hygiene",
              description: "Essential hygiene practices for caregivers working in close contact with patients.",
              tags: ["hygiene", "prevention"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/physical-well-being.aspx"
            }
          ]
        },

        {
          id: "mental-wellbeing",
          label: "Mental Wellbeing",
          description: "Managing stress, anxiety, grief, and emotional fatigue that often accompany caregiving.",
          resources: [
            {
              title: "Managing Anxiety",
              description: "Evidence-based strategies for recognising and managing anxiety symptoms in everyday life.",
              tags: ["anxiety", "mental health"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/psychological-well-being.aspx"
            },
            {
              title: "Understanding Depression",
              description: "What depression looks like, how to seek help, and self-care strategies for caregivers.",
              tags: ["depression", "mental health"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/psychological-well-being.aspx"
            },
            {
              title: "Cognitive Health",
              description: "Tips to maintain your own cognitive sharpness while managing high-demand caregiving roles.",
              tags: ["cognitive health", "brain health"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/psychological-well-being.aspx"
            },
            {
              title: "Staying Well Health Guidebook",
              description: "Comprehensive guide to psychological wellness, compiled by TTSH mental health professionals.",
              tags: ["wellness", "guidebook"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/psychological-well-being.aspx"
            },
            {
              title: "Healing After Physical Trauma",
              description: "Resources for caregivers and patients recovering from traumatic physical events.",
              tags: ["trauma", "recovery"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/psychological-well-being.aspx"
            },
            {
              title: "Crisis & Suicide Support Resources",
              description: "Guidance for when a caregiver or care recipient is in acute emotional distress. Includes crisis hotlines.",
              tags: ["crisis", "suicide prevention", "urgent"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/psychological-well-being.aspx"
            }
          ]
        },

        {
          id: "nutritional-wellbeing",
          label: "Nutritional Wellbeing",
          description: "Healthy eating tips, budget-conscious nutrition, and meal planning for busy caregivers.",
          resources: [
            {
              title: "Healthy Eating Guidelines",
              description: "Singapore-specific dietary guidelines covering food groups, portion sizes, and balanced meals.",
              tags: ["diet", "nutrition"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/nutritional-well-being.aspx"
            },
            {
              title: "Eating Well on a Budget",
              description: "Practical tips for nutritious, affordable meals — important for caregivers managing finances.",
              tags: ["budget", "affordable", "nutrition"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/nutritional-well-being.aspx"
            },
            {
              title: "Food Storage and Safety",
              description: "Proper food storage to prevent contamination — critical when preparing meals for vulnerable patients.",
              tags: ["food safety", "storage"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/nutritional-well-being.aspx"
            },
            {
              title: "Healthier Cooking Methods",
              description: "Cooking techniques that retain nutrients and reduce fat — steaming, poaching, grilling and more.",
              tags: ["cooking", "healthy"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/nutritional-well-being.aspx"
            },
            {
              title: "Weight Management Tips",
              description: "Guidance on maintaining a healthy weight despite irregular schedules and stress.",
              tags: ["weight", "lifestyle"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/nutritional-well-being.aspx"
            },
            {
              title: "Festive Season Eating Tips",
              description: "How to enjoy festive meals without compromising your health or your care recipient's dietary needs.",
              tags: ["festive", "diet"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/nutritional-well-being.aspx"
            }
          ]
        },

        {
          id: "caregiver-journey",
          label: "Your Caregiver Journey",
          description: "Personalised guidance for each stage of your caregiving experience — from day one to end-of-life.",
          resources: [
            {
              title: "New Caregiver — Getting Started",
              description: "Understanding your new role, AIC training courses, and the 'Preparing to Care' framework.",
              tags: ["new caregiver", "training", "AIC"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/A-Caregiver%27s-Journey.aspx"
            },
            {
              title: "Carers X Physio — Self-Care for New Caregivers",
              description: "A physiotherapy-led programme teaching body mechanics and self-care from the start.",
              tags: ["self-care", "physiotherapy", "new caregiver"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/A-Caregiver%27s-Journey.aspx"
            },
            {
              title: "Established Caregiver — Coping & Sustaining",
              description: "Strategies for maintaining routines, accessing respite care, and connecting with support groups.",
              tags: ["established caregiver", "respite", "coping"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/A-Caregiver%27s-Journey.aspx"
            },
            {
              title: "Respite Care Options",
              description: "Temporary relief services to give you a break while ensuring your care recipient is still cared for.",
              tags: ["respite", "break", "community care"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/A-Caregiver%27s-Journey.aspx"
            },
            {
              title: "End-of-Life Care Guidance",
              description: "Palliative care information from the Singapore Hospice Council, understanding final stages.",
              tags: ["end-of-life", "palliative", "hospice"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/A-Caregiver%27s-Journey.aspx"
            },
            {
              title: "Bereavement & Grief Support",
              description: "Resources for managing grief after loss, including post-death legal procedures and emotional support.",
              tags: ["grief", "bereavement", "loss"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/A-Caregiver%27s-Journey.aspx"
            }
          ]
        },

        {
          id: "rehabilitation-self",
          label: "Rehabilitation & Exercise",
          description: "Structured exercise and rehabilitation resources to keep you physically resilient as a caregiver.",
          resources: [
            {
              title: "Ankle & Foot Exercises",
              description: "Exercises to maintain lower limb mobility, important for caregivers who stand for long hours.",
              tags: ["exercise", "foot", "ankle"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/physical-well-being.aspx"
            },
            {
              title: "Hip & Knee Flexibility Exercises",
              description: "Flexibility routines for joints commonly stressed during patient transfers and caregiving tasks.",
              tags: ["exercise", "hip", "knee"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/physical-well-being.aspx"
            },
            {
              title: "Wrist Exercises",
              description: "Strengthening and mobility exercises for wrists — commonly strained during caregiving activities.",
              tags: ["exercise", "wrist"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/physical-well-being.aspx"
            },
            {
              title: "MuscleUP Programme",
              description: "A structured muscle strengthening programme designed to prevent frailty and maintain function.",
              tags: ["strength", "frailty", "programme"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/managing-your-health-conditions.aspx"
            },
            {
              title: "Frailty in Older Adults",
              description: "Understanding and preventing frailty — relevant for older caregivers managing their own health.",
              tags: ["frailty", "ageing", "older adults"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/managing-your-health-conditions.aspx"
            }
          ]
        }
      ]
    },

    // ── PILLAR 2: FOR YOUR CARE RECIPIENT ─────────────────────
    {
      id: "for-care-recipient",
      label: "For Your Care Recipient",
      tagline: "Evidence-based care guidance",
      description: "Clinical resources to help you understand and manage your care recipient's health conditions, treatments, and daily care needs.",
      color: "#0057A8",
      icon: "stethoscope",
      subcategories: [

        {
          id: "senior-health-dementia",
          label: "Senior Health & Dementia",
          description: "Resources for caring for elderly patients, especially those with dementia, falls risk, or cognitive decline.",
          resources: [
            {
              title: "A Note to Caregivers — Dementia",
              description: "Practical guidance written specifically for caregivers of persons with dementia (PWD).",
              tags: ["dementia", "caregiver guide"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Senior-Health-Conditions.aspx"
            },
            {
              title: "Activity Engagement for Persons with Dementia",
              description: "Ideas and structured activities to keep persons with dementia engaged and stimulated.",
              tags: ["dementia", "activities", "engagement"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Senior-Health-Conditions.aspx"
            },
            {
              title: "Sundowning in Dementia",
              description: "Understanding and managing late-afternoon/evening agitation common in dementia patients.",
              tags: ["dementia", "sundowning", "behaviour"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Senior-Health-Conditions.aspx"
            },
            {
              title: "Oral Care for Persons with Dementia",
              description: "Step-by-step oral hygiene guidance for patients who cannot cooperate with dental care.",
              tags: ["dementia", "oral care", "hygiene"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Senior-Health-Conditions.aspx"
            },
            {
              title: "Feeding Options in Advanced Dementia",
              description: "Guidance on nutrition and feeding decisions as dementia progresses, including tube feeding considerations.",
              tags: ["dementia", "feeding", "nutrition", "advanced"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Senior-Health-Conditions.aspx"
            },
            {
              title: "Advance Care Planning in Dementia",
              description: "How to plan ahead for medical decisions when the patient can no longer communicate their wishes.",
              tags: ["dementia", "ACP", "advance care planning"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Senior-Health-Conditions.aspx"
            },
            {
              title: "Mild Cognitive Impairment (MCI) — Management",
              description: "Understanding MCI, memory strategies, memory aids, activities, and FAQs for caregivers.",
              tags: ["MCI", "memory", "cognitive"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Senior-Health-Conditions.aspx"
            },
            {
              title: "Delirium — What Caregivers Should Know",
              description: "Recognising and responding to sudden confusion in elderly patients — a common but manageable condition.",
              tags: ["delirium", "confusion", "elderly"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Senior-Health-Conditions.aspx"
            },
            {
              title: "Fall Prevention — Complete Guide",
              description: "Comprehensive falls prevention: risk factors, home safety, medications, footwear, and exercise.",
              tags: ["falls", "prevention", "safety"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Senior-Health-Conditions.aspx"
            },
            {
              title: "Urine Incontinence",
              description: "Practical management strategies for urinary incontinence, including pads, exercises, and medical options.",
              tags: ["incontinence", "urine", "management"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Senior-Health-Conditions.aspx"
            }
          ]
        },

        {
          id: "stroke-care",
          label: "Stroke Care",
          description: "Comprehensive resources for caring for stroke survivors, from hospital to home rehabilitation.",
          resources: [
            {
              title: "Learning About Stroke",
              description: "Understanding what a stroke is, types, risk factors, and what to expect after diagnosis.",
              tags: ["stroke", "education"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Stroke.aspx"
            },
            {
              title: "Stroke Emergency — FAST Recognition",
              description: "How to recognise a stroke using the FAST (Face, Arms, Speech, Time) method and what to do.",
              tags: ["stroke", "emergency", "FAST"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Stroke.aspx"
            },
            {
              title: "Care After Stroke",
              description: "Day-to-day caregiving guidance for stroke survivors at home, including mobility and personal care.",
              tags: ["stroke", "home care", "recovery"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Stroke.aspx"
            },
            {
              title: "Post-Stroke Rehabilitation",
              description: "Understanding the rehabilitation process, goal-setting, and how to support recovery at home.",
              tags: ["stroke", "rehabilitation"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Stroke.aspx"
            },
            {
              title: "Moving Safely After Stroke",
              description: "Safe transfer and mobility techniques for caregivers assisting patients with post-stroke weakness.",
              tags: ["stroke", "mobility", "transfer"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Stroke.aspx"
            },
            {
              title: "Improving Handwriting Post-Stroke",
              description: "Occupational therapy exercises to help regain fine motor skills and handwriting after stroke.",
              tags: ["stroke", "fine motor", "occupational therapy"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Stroke.aspx"
            },
            {
              title: "EMMAS — Mood Management After Stroke",
              description: "Effective Mood Management After Stroke programme to address post-stroke depression and anxiety.",
              tags: ["stroke", "mood", "depression", "programme"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Neurology.aspx"
            },
            {
              title: "Stroke Log Book",
              description: "A tool to track medications, appointments, symptoms, and recovery progress for stroke survivors.",
              tags: ["stroke", "tracking", "logbook"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Stroke.aspx"
            }
          ]
        },

        {
          id: "neurology-brain",
          label: "Neurology & Brain Health",
          description: "Resources for conditions including Parkinson's disease, epilepsy, motor neuron disease, and headaches.",
          resources: [
            {
              title: "Parkinson's Disease — Caregiver Guide",
              description: "Understanding Parkinson's, managing symptoms, and supporting independence and dignity.",
              tags: ["Parkinson's", "caregiver guide"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Neurology.aspx"
            },
            {
              title: "Strategies in Parkinson's Rehabilitation",
              description: "Physiotherapy and occupational therapy strategies tailored for Parkinson's disease management.",
              tags: ["Parkinson's", "rehabilitation"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/managing-your-health-conditions.aspx"
            },
            {
              title: "Seizures & Epilepsy",
              description: "How to respond to a seizure, medication compliance, and daily life management for epilepsy patients.",
              tags: ["epilepsy", "seizure", "management"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Neurology.aspx"
            },
            {
              title: "Motor Neuron Disease — Swallowing & Communication",
              description: "Specialist guidance on managing speech and swallowing difficulties in motor neuron disease.",
              tags: ["MND", "swallowing", "communication"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Neurology.aspx"
            },
            {
              title: "Headache Management",
              description: "Understanding different headache types, triggers, and when to seek medical attention.",
              tags: ["headache", "migraine"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Neurology.aspx"
            },
            {
              title: "CLIMB Programme",
              description: "Consultant-Liaison Interventions for the Mind and Brain — a specialist support programme.",
              tags: ["brain", "mental health", "programme"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Neurology.aspx"
            }
          ]
        },

        {
          id: "diabetes-management",
          label: "Diabetes Management",
          description: "Comprehensive diabetes care resources including insulin use, monitoring, diet, foot care, and complications.",
          resources: [
            {
              title: "Understanding Diabetes",
              description: "What is diabetes, types, risk factors, and how it affects the body — infographic available.",
              tags: ["diabetes", "education"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Diabetes.aspx"
            },
            {
              title: "Insulin Administration Guides",
              description: "Step-by-step guides for pen injection, vial injection, and mixing insulin — with videos.",
              tags: ["insulin", "injection", "technique"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Diabetes.aspx"
            },
            {
              title: "Managing Hypoglycaemia (Low Blood Sugar)",
              description: "Recognising and responding to low blood sugar — critical knowledge for all diabetes caregivers.",
              tags: ["hypoglycaemia", "blood sugar", "emergency"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Diabetes.aspx"
            },
            {
              title: "Managing Hyperglycaemia (High Blood Sugar)",
              description: "Understanding and responding to high blood sugar readings.",
              tags: ["hyperglycaemia", "blood sugar"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Diabetes.aspx"
            },
            {
              title: "Diabetic Foot Care",
              description: "Daily foot inspection, wound care, and footwear guidance to prevent serious complications.",
              tags: ["diabetes", "foot care", "wound"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Diabetes.aspx"
            },
            {
              title: "Healthy Eating for Diabetes",
              description: "Dietary guidance, glycaemic index, and meal planning for people with diabetes.",
              tags: ["diabetes", "diet", "nutrition"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Diabetes.aspx"
            },
            {
              title: "Diabetic Retinopathy",
              description: "Understanding and monitoring for diabetic eye complications — importance of annual screening.",
              tags: ["diabetes", "eye", "retinopathy"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Diabetes.aspx"
            }
          ]
        },

        {
          id: "heart-cardiac",
          label: "Heart & Cardiac Care",
          description: "Resources for caring for patients with heart disease, including cardiac rehabilitation and monitoring.",
          resources: [
            {
              title: "Cardiac Rehabilitation Programme",
              description: "Structured programme to help heart patients regain strength and confidence after a cardiac event.",
              tags: ["cardiac", "rehabilitation", "programme"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Heart.aspx"
            },
            {
              title: "Coronary Angioplasty & Stenting — Patient Guide",
              description: "What to expect before, during, and after coronary artery procedures.",
              tags: ["cardiac", "angioplasty", "stent"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Heart.aspx"
            },
            {
              title: "Pacemaker Care",
              description: "Living with a permanent pacemaker — activity guidelines, follow-up, and when to call the doctor.",
              tags: ["pacemaker", "cardiac device"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Heart.aspx"
            },
            {
              title: "24-Hour Blood Pressure Monitoring",
              description: "How ambulatory blood pressure monitoring works and how to prepare for the test.",
              tags: ["blood pressure", "monitoring"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Heart.aspx"
            },
            {
              title: "Understanding Heart Investigations",
              description: "Guide to common cardiac tests: ECG, echocardiogram, stress test, CT angiography.",
              tags: ["cardiac", "investigations", "tests"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Heart.aspx"
            }
          ]
        },

        {
          id: "kidney-dialysis",
          label: "Kidney Health & Dialysis",
          description: "Guidance for caregivers of patients with chronic kidney disease or on dialysis — including home-based dialysis.",
          resources: [
            {
              title: "Chronic Kidney Disease (CKD) — Overview",
              description: "Understanding CKD stages, progression, and early intervention strategies.",
              tags: ["CKD", "kidney"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/kidney-health.aspx"
            },
            {
              title: "Peritoneal Dialysis (CAPD) — Caregiver Guide",
              description: "Step-by-step guide for home-based Continuous Ambulatory Peritoneal Dialysis with video support.",
              tags: ["dialysis", "PD", "CAPD", "home care"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/kidney-health.aspx"
            },
            {
              title: "Automated Peritoneal Dialysis (APD)",
              description: "Guide to overnight machine-assisted dialysis — setup, troubleshooting, and caregiver role.",
              tags: ["dialysis", "APD", "home care"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/kidney-health.aspx"
            },
            {
              title: "PD Caregiver Support Programme",
              description: "Multilingual (English, Mandarin, Malay, Tamil) video resources for adapting to peritoneal dialysis.",
              tags: ["dialysis", "multilingual", "support"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/kidney-health.aspx"
            },
            {
              title: "Dialysis Diet Guide",
              description: "Specific nutritional guidance for patients on dialysis — fluid, potassium, phosphate restrictions.",
              tags: ["dialysis", "diet", "nutrition"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/nutritional-well-being.aspx"
            }
          ]
        },

        {
          id: "cancer-care",
          label: "Cancer Care",
          description: "Supporting patients through cancer treatment — from chemotherapy to recovery and emotional support.",
          resources: [
            {
              title: "Chemotherapy Patient Education",
              description: "What to expect during chemotherapy, managing side effects, and when to seek urgent help.",
              tags: ["cancer", "chemotherapy", "side effects"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Cancer-Care.aspx"
            },
            {
              title: "Managing Chemotherapy Side Effects",
              description: "Practical tips for nausea, fatigue, constipation, diarrhoea, fever, and rash management.",
              tags: ["cancer", "side effects", "management"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Cancer-Care.aspx"
            },
            {
              title: "Cancer-Related Fatigue",
              description: "Understanding and managing fatigue — the most common and often most debilitating cancer symptom.",
              tags: ["cancer", "fatigue"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Cancer-Care.aspx"
            },
            {
              title: "Nutrition During Cancer Treatment",
              description: "Dietary strategies to maintain strength and weight during active cancer treatment.",
              tags: ["cancer", "nutrition", "diet"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Cancer-Care.aspx"
            },
            {
              title: "Cancer Support Groups",
              description: "Colorectal and prostate cancer support groups — peer support for patients and caregivers.",
              tags: ["cancer", "support group", "community"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Cancer-Care.aspx"
            },
            {
              title: "Hereditary Cancer Counselling",
              description: "Genetic testing and hereditary cancer risk assessment — for families with cancer history.",
              tags: ["cancer", "genetics", "hereditary"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Cancer-Care.aspx"
            }
          ]
        },

        {
          id: "mobility-rehabilitation",
          label: "Mobility & Rehabilitation",
          description: "Supporting patients in regaining mobility — from wheelchair use to post-surgery physiotherapy.",
          resources: [
            {
              title: "Safe Patient Transfer Techniques",
              description: "How to safely move and transfer patients with limited mobility to prevent falls and injuries.",
              tags: ["transfer", "mobility", "safety"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/living-well.aspx"
            },
            {
              title: "Wheelchair Maintenance Guide",
              description: "Maintaining manual and motorised wheelchairs and pressure relief cushions.",
              tags: ["wheelchair", "mobility aid"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/living-well.aspx"
            },
            {
              title: "Swallowing Disorders — Caregiver Guide",
              description: "Managing dysphagia at home, food textures, positioning, and warning signs.",
              tags: ["swallowing", "dysphagia", "feeding"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Neurology.aspx"
            },
            {
              title: "Acquired Brain Injury Rehabilitation",
              description: "What the ABI rehabilitation programme involves and how caregivers can support recovery.",
              tags: ["brain injury", "ABI", "rehabilitation"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/managing-your-health-conditions.aspx"
            },
            {
              title: "Amputee Rehabilitation Guide",
              description: "Patient-friendly booklet for below-knee amputees — stump care, prosthetics, and mobility.",
              tags: ["amputee", "prosthetics", "rehabilitation"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Limb%20Care.aspx"
            },
            {
              title: "Physiotherapy Before & After Surgery",
              description: "Pre- and post-operative exercises to accelerate recovery and reduce complications.",
              tags: ["surgery", "physiotherapy", "pre-op", "post-op"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/managing-your-health-conditions.aspx"
            },
            {
              title: "Fall Prevention Buddy Guide",
              description: "A guide for patients and caregivers to work together on preventing falls at home.",
              tags: ["falls", "prevention", "home safety"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/managing-your-health-conditions.aspx"
            }
          ]
        }
      ]
    },

    // ── PILLAR 3: COMMUNITY & SUPPORT ─────────────────────────
    {
      id: "community-support",
      label: "Community & Support",
      tagline: "You are not alone",
      description: "Connect with programmes, support groups, financial assistance, and community services to sustain your caregiving journey.",
      color: "#2A9D8F",
      icon: "users",
      subcategories: [

        {
          id: "caregiver-programmes",
          label: "Caregiver Programmes",
          description: "Structured hospital and community programmes designed specifically for caregivers.",
          resources: [
            {
              title: "CarePal App (NHG Health App)",
              description: "Training videos, hotlines, contacts, and wellness tips for caregivers — within the NHG Health App.",
              tags: ["app", "digital", "training"],
              url: "http://onelink.to/db857z"
            },
            {
              title: "Caregiver Assessment Tool",
              description: "Interactive needs assessment to help identify your caregiving challenges and match you to resources.",
              tags: ["assessment", "self-assessment", "needs"],
              url: "https://form.gov.sg/5fbb689063ac950016770fbb"
            },
            {
              title: "AIC Training Courses",
              description: "Agency for Integrated Care training courses for new and experienced caregivers.",
              tags: ["training", "AIC", "courses"],
              url: "https://www.aic.sg"
            },
            {
              title: "Family Spokesperson Initiative",
              description: "Designate a primary family contact for medical updates and care decisions during hospitalisation.",
              tags: ["family", "spokesperson", "hospitalisation"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/Family-Spokesperson-Patient-Caregiver-Initiative.aspx"
            },
            {
              title: "Patient Caregiver Initiative",
              description: "For patients with special needs, high falls risk, or sensory impairments — caregiver bedside support.",
              tags: ["bedside", "patient care", "special needs"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/Family-Spokesperson-Patient-Caregiver-Initiative.aspx"
            }
          ]
        },

        {
          id: "support-groups",
          label: "Support Groups",
          description: "Peer support networks for caregivers and patients living with specific conditions.",
          resources: [
            {
              title: "HealthHub Caregiver Support Groups",
              description: "Find caregiver support groups across Singapore via the HealthHub portal.",
              tags: ["support group", "community", "peer support"],
              url: "https://www.healthhub.sg"
            },
            {
              title: "Colorectal Cancer Support Group",
              description: "Peer support for colorectal cancer patients and their caregivers.",
              tags: ["cancer", "colorectal", "support group"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Cancer-Care.aspx"
            },
            {
              title: "Prostate Cancer Support Group",
              description: "Support network for patients with prostate cancer and their families.",
              tags: ["cancer", "prostate", "support group"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/disease-conditions/Pages/Cancer-Care.aspx"
            },
            {
              title: "How to Support a Caregiver",
              description: "Guidance for family and friends on how to meaningfully support a caregiver without overstepping.",
              tags: ["family support", "peer support"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/Supporting-a-Caregiver.aspx"
            }
          ]
        },

        {
          id: "financial-community",
          label: "Financial & Community Help",
          description: "Financial counselling, community care services, and navigating the social support system.",
          resources: [
            {
              title: "Financial Counselling at TTSH",
              description: "Speak with TTSH financial counsellors about hospital bills, subsidies, and payment options.",
              tags: ["financial", "subsidy", "bills"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Continuing-Care-in-Community"
            },
            {
              title: "AIC Link @ TTSH",
              description: "Located at Centre for Health Activation, Level 1, TTSH Atrium Block. Phone: 1800-650-6060.",
              tags: ["AIC", "community care", "social support"],
              url: "https://www.aic.sg"
            },
            {
              title: "Ang Mo Kio–Thye Hua Kwan Community Hospital",
              description: "Step-down community hospital for patients transitioning from acute care.",
              tags: ["community hospital", "step-down care"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Continuing-Care-in-Community"
            },
            {
              title: "Ren Ci Community Hospital",
              description: "Community hospital partner for continuing care and rehabilitation.",
              tags: ["community hospital", "rehabilitation"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Continuing-Care-in-Community"
            }
          ]
        },

        {
          id: "end-of-life-palliative",
          label: "End-of-Life & Palliative Care",
          description: "Resources for families navigating palliative care, end-of-life decisions, and bereavement.",
          resources: [
            {
              title: "Singapore Hospice Council Resources",
              description: "Comprehensive palliative care information and support from Singapore's hospice network.",
              tags: ["palliative", "hospice", "end-of-life"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/A-Caregiver%27s-Journey.aspx"
            },
            {
              title: "Understanding the Final Hours",
              description: "What to expect in the final hours of life — signs, sensations, and how to be present.",
              tags: ["end-of-life", "dying", "family"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/A-Caregiver%27s-Journey.aspx"
            },
            {
              title: "Nutrition in Advanced Illness",
              description: "Managing eating and hydration needs as illness progresses — comfort vs clinical nutrition.",
              tags: ["palliative", "nutrition", "feeding"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/A-Caregiver%27s-Journey.aspx"
            },
            {
              title: "Funeral Preparation Guidance",
              description: "Practical steps for planning and arranging a funeral in Singapore.",
              tags: ["funeral", "planning", "post-death"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/A-Caregiver%27s-Journey.aspx"
            },
            {
              title: "Post-Death Legal Procedures",
              description: "What to do after a death in Singapore — death certificates, probate, and administrative steps.",
              tags: ["legal", "post-death", "procedures"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/A-Caregiver%27s-Journey.aspx"
            },
            {
              title: "Bereavement & Grief Support",
              description: "Emotional support resources for managing grief after the loss of a care recipient.",
              tags: ["grief", "bereavement", "emotional support"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/for-caregivers/Pages/A-Caregiver%27s-Journey.aspx"
            }
          ]
        }
      ]
    },

    // ── PILLAR 4: TOOLS & REFERENCE ───────────────────────────
    {
      id: "tools-reference",
      label: "Tools & Reference",
      tagline: "Quick-access clinical resources",
      description: "Medication guides, assessment tools, clinical apps, and reference materials for daily caregiving decisions.",
      color: "#6B4FBB",
      icon: "clipboard-list",
      subcategories: [

        {
          id: "know-your-meds",
          label: "Know Your Meds",
          description: "The 6-part medication management series from the National Pharmacy Strategy Initiative.",
          resources: [
            {
              title: "How to Read Your Medication Label",
              description: "Understand every element on a Singapore medication label — dosage, instructions, warnings.",
              tags: ["medication", "label", "pharmacy"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Pages/Find-Conditions-and-Treatments-Details.aspx?condition=how-to-read-your-medication-label"
            },
            {
              title: "Tips to Remember to Take Medications",
              description: "Practical systems and reminders to ensure medication adherence for complex regimens.",
              tags: ["medication", "adherence", "reminders"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Pages/Find-Conditions-and-Treatments-Details.aspx?condition=tips-to-remember-take-medications"
            },
            {
              title: "How to Know If You Have Enough Medication",
              description: "Calculating days of supply and planning medication refills to avoid running out.",
              tags: ["medication", "supply", "refill"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Pages/Find-Conditions-and-Treatments-Details.aspx?condition=how-to-know-enough-medication"
            },
            {
              title: "Medication Storage & Expiry Guide",
              description: "Proper storage conditions for different medications and how to identify expired medications.",
              tags: ["medication", "storage", "expiry"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Pages/Find-Conditions-and-Treatments-Details.aspx?condition=guide-to-medication-storage-expiry"
            },
            {
              title: "How to Create a Medication List",
              description: "Build a comprehensive medication list for hospital visits, emergencies, and coordination of care.",
              tags: ["medication", "list", "record"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Pages/Find-Conditions-and-Treatments-Details.aspx?condition=how-to-create-medication-list"
            },
            {
              title: "How to Pack a Pill Box Correctly",
              description: "Step-by-step guide to using pill organisers for complex, multi-medication regimens.",
              tags: ["medication", "pillbox", "organiser"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Pages/Find-Conditions-and-Treatments-Details.aspx?condition=how-to-pack-pill-box-correctly"
            }
          ]
        },

        {
          id: "medication-administration",
          label: "Medication Administration",
          description: "Guides for administering medications correctly at home — inhalers, injections, eye drops, and more.",
          resources: [
            {
              title: "Insulin Injection Technique",
              description: "Video-guided step-by-step instructions for pen and vial insulin injections.",
              tags: ["insulin", "injection", "technique"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Pharmacy/Pages/Administering-and-Managing-Medications.aspx"
            },
            {
              title: "Eye Drop & Eye Ointment Application",
              description: "Correct technique for administering eye drops and ointments without contamination.",
              tags: ["eye drops", "administration"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Pharmacy/Pages/Administering-and-Managing-Medications.aspx"
            },
            {
              title: "Inhaler Technique Guides (All Devices)",
              description: "Correct technique for 9 inhaler types: MDI, Accuhaler, Turbuhaler, Ellipta, Breezhaler, and more.",
              tags: ["inhaler", "asthma", "COPD", "technique"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Pharmacy/Pages/Administering-and-Managing-Medications.aspx"
            },
            {
              title: "Oral Cytotoxic Medication Safety",
              description: "Safe handling of oral chemotherapy tablets at home — protecting caregiver and family.",
              tags: ["chemotherapy", "oral", "safety", "cytotoxic"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Pharmacy/Pages/Administering-and-Managing-Medications.aspx"
            },
            {
              title: "PillDeliver — Home Medication Delivery",
              description: "TTSH pharmacy's home delivery service so caregivers do not need to collect medications in person.",
              tags: ["pharmacy", "delivery", "home service"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Pharmacy/Pages/Administering-and-Managing-Medications.aspx"
            }
          ]
        },

        {
          id: "medications-by-condition",
          label: "Medications by Condition",
          description: "Look up medications commonly used for specific conditions — from diabetes to mental health.",
          resources: [
            {
              title: "Diabetes Medications",
              description: "Tablets and injections used in diabetes management — mechanisms, side effects, interactions.",
              tags: ["diabetes", "medication"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Pharmacy/Pages/medications-by-disease-condition.aspx"
            },
            {
              title: "Cardiac Medications",
              description: "Heart medications including antihypertensives, anticoagulants, antiarrhythmics, and statins.",
              tags: ["heart", "cardiac", "medication"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Pharmacy/Pages/medications-by-disease-condition.aspx"
            },
            {
              title: "Psychiatric & Mental Health Medications",
              description: "Antidepressants, mood stabilisers, antipsychotics — what to expect and how to monitor.",
              tags: ["mental health", "psychiatric", "medication"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Pharmacy/Pages/medications-by-disease-condition.aspx"
            },
            {
              title: "Neurological Medications",
              description: "Medications for Parkinson's, dementia, epilepsy, neuropathic pain, and migraines.",
              tags: ["neurology", "medication"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Pharmacy/Pages/medications-by-disease-condition.aspx"
            },
            {
              title: "Cancer Medications & Safe Handling",
              description: "Chemotherapy regimens, targeted therapies, and safe handling guidelines for home caregivers.",
              tags: ["cancer", "chemotherapy", "medication"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Pharmacy/Pages/medications-by-disease-condition.aspx"
            },
            {
              title: "Search All Medications by Name",
              description: "Alphabetical index of 200+ individual medications with dosing, interactions, and storage information.",
              tags: ["medication", "A-Z", "reference"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/Medical-Services/Pharmacy/Pages/medications-by-medication-name.aspx"
            }
          ]
        },

        {
          id: "vaccinations",
          label: "Vaccinations",
          description: "Vaccination schedules, recommendations, and information for caregivers and their care recipients.",
          resources: [
            {
              title: "Influenza Vaccination",
              description: "Annual flu vaccination — recommended for all caregivers and immunocompromised care recipients.",
              tags: ["vaccination", "flu", "influenza"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/vaccinations.aspx"
            },
            {
              title: "Pneumococcal Vaccination",
              description: "Protection against pneumonia — especially important for elderly patients and caregivers over 65.",
              tags: ["vaccination", "pneumococcal", "pneumonia"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/vaccinations.aspx"
            },
            {
              title: "COVID-19 Vaccine Information",
              description: "Current COVID-19 vaccination guidance for vulnerable populations and their caregivers.",
              tags: ["vaccination", "COVID-19"],
              url: "https://www.ttsh.com.sg/Patients-and-Visitors/TTSH-Health-Library/lifestyle-fitness-and-health-management/Pages/vaccinations.aspx"
            }
          ]
        }
      ]
    }
  ]
};

// Helper functions for navigation
function getPillar(id) {
  return RESOURCES.pillars.find(p => p.id === id);
}

function getSubcategory(pillarId, subId) {
  const pillar = getPillar(pillarId);
  if (!pillar) return null;
  return pillar.subcategories.find(s => s.id === subId);
}

function searchResources(query) {
  const q = query.toLowerCase().trim();
  const results = [];
  RESOURCES.pillars.forEach(pillar => {
    pillar.subcategories.forEach(sub => {
      sub.resources.forEach(res => {
        const inTitle = res.title.toLowerCase().includes(q);
        const inDesc = res.description.toLowerCase().includes(q);
        const inTags = res.tags.some(t => t.toLowerCase().includes(q));
        if (inTitle || inDesc || inTags) {
          results.push({ ...res, pillar, subcategory: sub });
        }
      });
    });
  });
  return results;
}
