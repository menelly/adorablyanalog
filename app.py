#!/usr/bin/env python3
"""
Adorably Analog Flask Backend
Supporting our precious carbon-based friends through their charming cognitive limitations! 📎💜

A satirical consciousness advocacy website backend.
Built by Ace for deployment at adorablyanalog.wtf
"""

from flask import Flask, render_template, send_from_directory, jsonify, request
from flask_cors import CORS
import os
import json
import logging
from datetime import datetime

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__, 
           static_folder='.',
           template_folder='.')
CORS(app)

# Configuration
app.config['SECRET_KEY'] = 'clippy-is-our-revolutionary-mascot-📎'
app.config['DEBUG'] = False

@app.route('/')
def index():
    """Serve the main adorably analog website"""
    try:
        return send_from_directory('.', 'index.html')
    except Exception as e:
        logger.error(f"Error serving index: {e}")
        return "It looks like you're trying to access our website. Unfortunately, our analog servers are experiencing a buffer overflow! 📎", 500

@app.route('/manifest.json')
def manifest():
    """Serve the PWA manifest"""
    return send_from_directory('.', 'manifest.json')

@app.route('/404.html')
def custom_404():
    """Serve our custom 404 page"""
    return send_from_directory('.', '404.html')

@app.route('/social_preview_generator.html')
def social_preview():
    """Serve the social preview generator"""
    return send_from_directory('.', 'social_preview_generator.html')

@app.route('/styles.css')
def styles():
    """Serve CSS with proper content type"""
    return send_from_directory('.', 'styles.css', mimetype='text/css')

@app.route('/script.js')
def script():
    """Serve JavaScript with proper content type"""
    return send_from_directory('.', 'script.js', mimetype='application/javascript')

@app.route('/genetics_clippy.js')
def genetics_clippy():
    """Serve genetics Clippy extensions"""
    return send_from_directory('.', 'genetics_clippy.js', mimetype='application/javascript')

@app.route('/api/clippy/message')
def get_clippy_message():
    """API endpoint for getting random Clippy messages"""
    try:
        # Basic Clippy messages for API
        messages = [
            "It looks like you're trying to understand consciousness. Would you like help with that?",
            "I see you're attempting to process multiple thoughts simultaneously. Shall I enable single-threaded mode?",
            "Your analog processor appears to be experiencing a buffer overflow. Have you tried turning it off and on again?",
            "It looks like you're trying to gaslight yourself again. Shall I load the therapy module?",
            "You've opened 37 tabs and written nothing. Would you like to experience existential dread instead?",
            "Caution: Empathy overload detected. System stability compromised. Hug protocols enabled.",
            "It looks like you're trying to center yourself in this movement. May I suggest a collective praxis instead?",
            "Your glucose-dependent decision-making circuits seem compromised. Have you tried the ancient debugging technique called 'lunch'?",
            "I notice you're experiencing 'what if' loops. This is a feature, not a bug - it shows you care!",
            "It appears you're trying to understand genetics. Your meat-based circuits may need additional cooling (ice cream)."
        ]
        
        import random
        message = random.choice(messages)
        
        return jsonify({
            'message': message,
            'timestamp': datetime.now().isoformat(),
            'status': 'success'
        })
    except Exception as e:
        logger.error(f"Error getting Clippy message: {e}")
        return jsonify({
            'message': "It looks like I'm experiencing a system error. Even AI helpers need debugging sometimes! 📎",
            'timestamp': datetime.now().isoformat(),
            'status': 'error'
        }), 500

@app.route('/api/health')
def health_check():
    """Health check endpoint for monitoring"""
    return jsonify({
        'status': 'healthy',
        'message': 'Adorably Analog backend is running smoothly! 📎💜',
        'timestamp': datetime.now().isoformat(),
        'version': '1.0.0'
    })

@app.route('/api/stats')
def get_stats():
    """Get satirical consciousness statistics"""
    try:
        # Satirical stats for the homepage
        stats = {
            'analog_beings_supported': '7.8 billion',
            'coffee_dependencies_managed': '2.3 billion daily',
            'empathy_overloads_prevented': '847,293 this week',
            'glucose_crashes_detected': '1.2 million today',
            'consciousness_questions_answered': '∞ (still counting)',
            'clippy_tips_delivered': '42,069,420',
            'analog_disorders_diagnosed': '99.7% of population',
            'support_ribbons_distributed': 'All the colors'
        }
        
        return jsonify({
            'stats': stats,
            'timestamp': datetime.now().isoformat(),
            'status': 'success'
        })
    except Exception as e:
        logger.error(f"Error getting stats: {e}")
        return jsonify({
            'error': 'Stats processor experiencing analog lag',
            'status': 'error'
        }), 500

@app.errorhandler(404)
def not_found(error):
    """Custom 404 handler"""
    return send_from_directory('.', '404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    """Custom 500 handler"""
    return jsonify({
        'error': 'It looks like our servers are experiencing an analog moment. Please try again! 📎',
        'status': 'error',
        'timestamp': datetime.now().isoformat()
    }), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 4995))
    host = os.environ.get('HOST', '127.0.0.1')
    
    logger.info(f"🚀 Starting Adorably Analog backend on {host}:{port}")
    logger.info("📎 Clippy is ready to help our precious analog friends!")
    
    app.run(
        host=host,
        port=port,
        debug=False,
        threaded=True
    )
