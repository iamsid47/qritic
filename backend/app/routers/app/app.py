from fastapi import APIRouter
import os
import PyPDF2
import nltk
import logging
from nltk.corpus import stopwords
from nltk.tokenize import RegexpTokenizer
from nltk.stem import WordNetLemmatizer, PorterStemmer
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from pdfplumber import open as pdf_open
from flask_cors import CORS
import time
from calculate_similarity import extract_ner_from_cvs
from calculate_similarity import calculate_tfidf_similarity, calculate_sentence_transformer_similarity, calculate_levenshtein_similarity, calculate_bert_similarity as calculate_euclidean_similarity, calculate_spacy_similarity, calculate_simhash_similarity



router = APIRouter()

@router.get("/check")
async def check_server():
    return {"status": "success", "message": "server is working"}

@router.get("/check_similarity")
async def check_similarity():
    return 0