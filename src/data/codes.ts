export const codes = [
    {
      "id": "A",
      "title": "Primary TB",
      "clinicalFindings": "Pria 35 tahun dengan penurunan berat badan dan batuk kronis.",
      "radiologyFindings": {
        "Paru": "Konsolidasi di zona bagian atas paru kanan. Pembesaran hilus ipsilateral.",
        "Mediastinum": "Normal",
        "Pleura": "Normal",
        "Saluran Napas": "Normal",
        "Tulang": "Normal",
        "Jantung": "Normal",
        "Diafragma": "Normal",
        "Esofagus": "Normal"
      },
      "differentialDiagnosis": [
        "Pneumonia",
        "Karsinoma bronkogenik"
      ],
      "pathomechanism": "Tuberkulosis primer terjadi saat seseorang pertama kali terinfeksi oleh Mycobacterium tuberculosis, biasanya melalui inhalasi droplet dari individu yang menular. Infeksi primer biasanya menghasilkan lesi di paru perifer (fokus Ghon) disertai dengan limfadenopati di kelenjar limfa hilus. Gabungan keduanya disebut kompleks Ghon. Fokus Ghon yang telah mengalami kalsifikasi adalah tanda bahwa infeksi TB primer telah sembuh secara klinis atau memasuki fase laten.",
      "images": [
        "/suspect1/SuspectList1.jpg",
        "/suspect1/SuspectList1-Swiped.jpg",
        "/suspect1/suspectlist1 swipe 2.png"
      ],
      "imageSource": "Primary TB: source: https://www.radiologymasterclass.co.uk/gallery/chest/pulmonary-disease/tuberculosis_tb"
    },  
    {
      "id": "B",
      "title": "Tension Pneumothorax",
      "clinicalFindings": "Pria 30 tahun pasca trauma.",
      "radiologyFindings": {
        "Paru": "Corakan paru sinistra (-)",
        "Mediastinum": "Mediastinum deviasi ke arah dextra",
        "Pleura": "Cavum pleura sinistra lusen",
        "Saluran Napas": "Normal",
        "Tulang": "Normal",
        "Jantung": "Normal",
        "Diafragma": "Normal",
        "Esofagus": "Normal"
      },
      "differentialDiagnosis": [
        "Pneumothorax non-tension",
        "Pneumomediastinum",
        "Cystic Lung Disease"
      ],
      "pathomechanism": "",
      "images": [
        "/suspect2/SuspectList2.png",
        "/suspect2/SuspectList2-Swiped.png"
      ],
      "imageSource": "Tension pneumothorax sinistra dengan kolaps pulmo sinistra. Source : Intermediate Radiology skills lab blok II.2"
    },  
    {
      id: "C",
      title: "Code C: PET Scan Results - Metabolic Activity",
      clinicalFindings:
        "45-year-old female with confirmed non-small cell lung carcinoma. PET-CT ordered for staging purposes.",
      radiologyFindings: {
        Lung: "Known right upper lobe mass with intense FDG uptake (SUV max 12.4).",
        Mediastinum: "Two hypermetabolic mediastinal lymph nodes in stations 4R and 7.",
        Pleura: "No pleural involvement.",
        Airway: "Normal",
        Bone: "No evidence of osseous metastases.",
        Cardiac: "Normal cardiac uptake.",
        Diaphragm: "Normal",
        "Distant Sites": "No evidence of distant metastatic disease.",
      },
      differentialDiagnosis: [
        "Stage IIIA (T3N1M0) non-small cell lung carcinoma",
        "Inflammatory process with reactive lymphadenopathy",
        "Granulomatous disease with hypermetabolic activity",
      ],
      pathomechanism:
        "PET scans utilize the glucose analog fluorodeoxyglucose (FDG) which is preferentially taken up by metabolically active cells. Cancer cells typically demonstrate increased glucose metabolism due to the Warburg effect - a shift toward glycolysis even in the presence of oxygen. The SUV (standardized uptake value) quantifies the intensity of FDG uptake, with higher values generally correlating with more aggressive malignancies.",
      images: [
        "/suspect2/SuspectList2.png",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      imageSource: "Source: Nuclear Medicine Department / University Hospital",
    },
    {
      id: "D",
      title: "Code D: Biopsy Report - Histopathological Findings",
      clinicalFindings:
        "45-year-old female with right upper lobe mass. CT-guided core needle biopsy performed for tissue diagnosis.",
      radiologyFindings: {
        Specimen: "Core needle biopsy of right upper lobe mass.",
        "Microscopic Examination":
          "Malignant cells with features consistent with non-small cell lung carcinoma, adenocarcinoma subtype.",
        Immunohistochemistry: "Positive for TTF-1 and Napsin A. Negative for p40, synaptophysin, and chromogranin.",
        "Molecular Studies": "EGFR mutation negative. ALK rearrangement negative. PD-L1 expression 60%.",
      },
      differentialDiagnosis: [
        "Lung adenocarcinoma",
        "Squamous cell carcinoma",
        "Metastatic adenocarcinoma from another primary site",
        "Neuroendocrine tumor",
      ],
      pathomechanism:
        "Lung adenocarcinoma arises from the glandular cells that would normally secrete mucus. TTF-1 (Thyroid Transcription Factor-1) is a protein that regulates transcription of genes specific for the thyroid, lung, and diencephalon. Its presence in tumor cells strongly suggests a primary lung origin for adenocarcinoma. Napsin A is an aspartic proteinase involved in the maturation of surfactant protein B, and its expression further supports the diagnosis of primary lung adenocarcinoma.",
      images: [
        "/suspect2/SuspectList2.png",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      imageSource: "Source: Department of Pathology / University Medical Center",
    },
    {
      id: "E",
      title: "Code E: Treatment Plan - Multidisciplinary Approach",
      clinicalFindings:
        "45-year-old female with stage IIIA (T3N1M0) non-small cell lung adenocarcinoma. ECOG performance status 1. No significant comorbidities.",
      radiologyFindings: {
        "Current Status": "Right upper lobe mass with mediastinal lymphadenopathy. No distant metastases.",
        "Pulmonary Function": "FEV1 85% predicted. DLCO 80% predicted.",
        "Cardiac Evaluation": "Normal cardiac function. LVEF 65%.",
        "Brain MRI": "No evidence of intracranial metastases.",
      },
      differentialDiagnosis: [
        "Neoadjuvant chemotherapy followed by surgical resection",
        "Definitive chemoradiation",
        "Surgical resection followed by adjuvant therapy",
        "Immunotherapy in combination with chemotherapy",
      ],
      pathomechanism:
        "Stage IIIA non-small cell lung cancer represents locally advanced disease that may still be amenable to curative treatment. Neoadjuvant chemotherapy aims to reduce tumor size before surgery, potentially converting unresectable tumors to resectable ones. It also addresses micrometastatic disease early. The combination of platinum-based chemotherapy with surgical resection has shown improved survival compared to surgery alone in stage IIIA disease.",
      images: [
        "/suspect2/SuspectList2.png",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      imageSource: "Source: Oncology Department / Treatment Planning System",
    },
  ]