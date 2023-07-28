function prompt {
	case "$1"
	for f in $(ls -R ~/Downloads/programming); do fnew=$(python -c"from pathlib import Path; import os; p = Path('$f'); os.system(f'mkdir -p {str(p.resolve().parent).lower()}') if '.' in p.name else None ; print(str(p.resolve().parent).lower()) if '.' in p.name else None"); mv $f $fnew ; done	
}

