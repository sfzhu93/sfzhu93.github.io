The VirusTotal Dataset and Analysis Scripts for USENIX Security 2020 Artifact Evaluation
----------------------------------------------------------------------------------------

*********************************************************************************************
*Version: 1.1
*Author:  Shuofei Zhu, Jianjun Shi, Limin Yang, Boqin Qin, Ziyi Zhang, Linhai Song, Gang Wang
*Update:  Feb 27, 2020
*Paper:   Measuring and Modeling the Label Dynamics of Online Anti-Malware Engines
*********************************************************************************************

This document is to help users make use of the dataset we collected and reproduce the 
measurement we conducted. 

A quick guide to run the artifact:
1. Download the artifact and decompress it with tools supporting .7z files.
2. Open the virtual machine with Virtual Box (version later than 6.0.14 recommended).
3. The password is `user`.
4. You can find a directory containing the artifact. 
5. For example, to run 
`/home/user/Desktop/virustotal/section-3-3/count_measure_points.py`,
user can run the following commands:
```
cd /home/user/Desktop/virustotal/section-3-3
python3 count_measure_points.py
```

The detailed descriptions are as follows:


0. Artifact Expectation
-----------------------------------

The most important part of our artifact is released in a virtual machine, which is
created using Virtual Box 6.0.14. We expect a Virtual Box in the version or higher 
to open the virtual machine. 


1. Artifact Overview
-----------------------------------

Our paper presents a measurement study of VirusTotal. For artifact evaluation, 
we release 1) the paper survey results, 2) the raw data we collected from
VirusTotal, 3) the preprocessed data, and 4) the scripts to compute the numbers and
plot the figures in our paper. 

In total, we collected about 20GB of data (compressed) from VirusTotal. 
Since the raw data is too large, we release it using a separate link. 
To facilitate the reproduction of our measurements, we preprocess the data
 firstly and release the preprocessed data together with the scripts in a 
virtual machine. All required libraries are already installed in the 
virtual machine. 

**The user name and password are both 'user' on the virtual machine.**

The scripts to collect data from VirusTotal are not released.

2. Raw Data Directory Structure
-----------------------------------

The archive contains 7 subdirectories. The `main` directory contains two archive files. They
contain the raw json data of the main dataset. In each archive, there are many directories
named by date. In each directory, there are json files whose name correspond to the sha256
hash of them. 

In Table 2, we listed 5 datasets. The ground truth dataset contains Malware-I, Malware-II, 
Benign-I, and Benign-II. In our artifact, there are actually 3 benign sets: benign-I and 
benign-II are combined and called Benign-I in the paper, and benign-III is called Benign-II 
in the paper. The five directories, `malware-I`, `malware-II`, `benign-I`, `benign-II` and 
`benign-III` correspond to each dataset accordingly. In each directory, there are two 
subdirectories: `desktop` includes the information of desktop scans, and `virustotal` 
includes the json data.

The last directory, `desktop-experiment-reports` contains some experiment notes of desktop 
scans. 

3. Virtual Machine Directory Structure
-----------------------------------


All data and scripts are in “virustotal” directory on the desktop. We organize the
sub-directories to correspond to sections in our paper. We explain each sub-directory
and script as follows.

First, there are two directories storing the preprocessed data: `large-dataset` and `ground-
truth-dataset`. `large-dataset` stores the main dataset. Each file in the directory 
represents results on each vendor. For instance, `Ad-Aware_detected.list` contains results 
of Ad-Aware detecting all sample files in the main dataset. Each line in the file contains 
two fields, separated by ‘\t’. The first field is the first 7 or 8 digits of a file’s sha256 
string, and the second field is a sequence containing 0, 1, or 2. Each 0, 1, or 2 represents 
“detected as benign”, “detected as malicious” or “data is missing” respectively. The result 
on each day is ordered chronologically. For instance, “11021” means the engine reports as 
malicious in the first two days and the last day, the engine reports benign on the third 
day, and we don’t have data on the fourth day.
 
`ground-truth-dataset` contains the preprocessed data of ground truth dataset. They are 
stored in the corresponding subdirectories respectively, following a similar format of the 
main dataset. Besides, there are also files stored directly under `ground-truth-dataset`. 
Each file contains all the samples in all ground truth datasets.

Next, we explain the directories according to each section in the paper. 

**How to run the commands in each directory:**
All Python scripts are in Python 3 unless specified. In other words, all scripts should be 
run with a command like `python3 script.py`. For each script, the working directory is the 
directory that directly contains the script. Therefore, to run a script in 
`section-a-b/foo.py`,
users should run the following command in terminal:
```
cd section-a-b
python3 foo.py
```


Section 2:

We put the summaries of the papers in section-2.xlsx. We also put a link to this file on the
final version of the paper.


Section 3.2:
Each file contains the PE samples of the ground truth datasets. Please be careful when 
inspecting the malicious samples. 

Section 3.3:
The total number of measurements is computed on raw json data.
The scripts to compute the last two numbers are `section-3-3/count_measure_points_main.py` 
and `section-3-3/count_measure_points.py`.

Section 4.1:
Compute the numbers: `section-4-1/flip_count.py`
Figure 2: `section-4-1/figure-2/hazard_plot.py`
Figure 17 and Figure 18: `section-4-1/figure-17-and-18/hazard_plot.py`
The original data in Figure 2:
`large-dataset/AegisLab_detected.list`, line 334 (the original time sequence)
`large-dataset-no-hazard/AegisLab_detected_nohazard.list`, line 334 (the time sequence 
without hazard)

Time sequence data with hazard flips removed: `base-dir/large-dataset-no-hazard`

Section 4.2:
Figure 3(a): `section-4-2/figure-3a.py`
Figure 3(b): `section-4-2/figure-3b.py`
Figure 3(c): `section-4-2/figure-3c.py`

Section 4.3:
`section-4-3/count_flip_reasons.py`
1,710,565 matches the results of VEUL+VLUL+VGUL.
213,159 matches the result of VLUL.
1,497,115 matches the result of VEUL.
83,164 matches the result of UG+VNUE.
57,450 matches the result of UG.
25,714 matches the result of VNUE.
380,807 matches the result of VEUE.
397,273 matches the result of UM+VMUE+VMUL.

Detailed explanation of the output:
1. UM: # of flips with update information missing
2. UG: # of flips with u1>u2
3. UE: # of flips with u1=u2
  a. VMUE: # of flips with u1=u2 and version information missing
  b. VEUE: # of flips with u1=u2 and v1=v2
  c. VNUE: # of flips with u1=u2 and v1!=v2
4. UL: # of flips with u1<u2
  a. VMUL: # of flips with u1<u2 and version information missing
  b. VEUL: # of flips with u1<u2 and v1=v2
  c. VLUL: # of flips with u1<u2 and v1<v2
  d. VGUL: # of flips with u1<u2 and v1>v2

Section 4.4:
Figure 4(a): 
`section-4-4/figure-4/figure-4a.py`
Figure 4(b): 
`section-4-4/figure-4/figure-4b.py`
(We used these scripts to make the plot first, then used PDF tools like Adobe Illustrator to 
make the final figure.)


Section 4.5:
Figure 5: 
`section-4-5/figure-5/figure-5.py`

Section 5.1:
Figure 6: 
`section-5-1/figure-6.py`
Data of Figure 6: 
`section-5-1/figure-6-data.py`
Figure 7: made by Adobe Illustrator, according to data generated by 
`section-5-1/figure-7-data.py`.
The data is explained as follows:
The number behind each engine name represents the cluster number the engine belongs to. 
For instance, we can find that Cyren, McAfee, Microsoft, and McAfee-GW-Edition are in the 
same cluster, because they have the same number.

Figure 16: 
`section-5-1/clustering_use_saved.py`
The order of some engine pairs may be reversed compared with the results in the paper.
This doesn't illustrate a different result from the paper.

Clustering result when t=0.02: 
`section-5-1/t_0_02_data.py`
Running the clustering algorithm to re-generate intermediate results for above scripts: 
`section-5-1/clustering.py` (It may take hours to run. We suggest backup dist-results.txt
before running it.)

Section 5.2:
Figure 8 and Figure 10: 
`section-5-2/figure-8-and-figure-10/heatmap_seaborn.py`
Figure 9:
`section-5-2/figure-9-and-figure-11/active_incoming_outgoing.py`
Figure 11:
`section-5-2/figure-9-and-figure-11/passive_incoming_outgoing.py`
Figure 19 and Figure 20:
The two figures are made with gephi (https://gephi.org/), which we failed to install on the 
virtual machine.
We can open the following two files with gephi installed:
`section-5-2/figure-19-and-figure-20/artifact-gephi/artifact/gephi/active-influence-01-flip.gephi` for Figure 19, 
and `section-5-2/figure-19-and-figure-20/artifact-gephi/artifact/gephi/active-influence-10-flip.gephi` for Figure 20.
Figure 21 and Figure 22 are removed in the final version paper.

Compute the influence results:
Use Python 2 to run: `cd section-5-2;python influence_active.py` and 
`cd section-5-2;python influence_passive.py`.
(These two scripts used some Python 2 features that made them hard to migrate to Python 3.)

Section 6.1:
Figure 12:
section-6-1/figure-12/first-last-day-p-rate.py
Figure 13:
section-6-1/figure-13/vendor-tp-fp.py

Section 6.2:
Figure 14:
`section-6-2/figure-14-and-15/figure-14.py`
Figure 15:
`section-6-2/figure-14-and-15/figure-15.py`

Section 6.3:
Inconsistency rate (2nd paragraph):
The final results were summarized through spreadsheets in 
`section-6-3/inconsistency_summary.txt`.
Detailed inconsistency rate results are in `section-6-3/inconsistency/`.
In the directory, m1 and m2 are results for Malware-I and Malware-II respectively, b1 and b2 
are results for Benign-I, and b3 is for Benign-II.
They are computed by 
`section-6-3/get_inconsistency_details.py`.

Correctness (3rd paragraph):
The final results were summarized through spreadsheets in 
`section-6-3/correctness_summary.xlsx`.

They are computed through `section-6-3/correctness.py`.

Section 6.4:
Hazard vs non-hazard:
`section-6-4/flip_count.py`
Count flip reasons:
`section-6-4/count_flip_reasons.py`
(The results are interpreted in the same way as Section 4.3.)
