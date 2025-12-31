#!/bin/bash

# Security Check Script for TokenGate Pro
# Run this before committing to ensure no sensitive data is exposed

echo "🔒 TokenGate Pro - Security Check"
echo "=================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

# Check 1: Verify .env files are not in git
echo "📋 Check 1: Verifying .env files are ignored..."
if git ls-files | grep -q "^\.env$"; then
    echo -e "${RED}❌ ERROR: .env file is tracked by git!${NC}"
    ERRORS=$((ERRORS+1))
else
    echo -e "${GREEN}✅ .env is not tracked${NC}"
fi

if git ls-files | grep -q "tokengate-frontend/\.env\.local"; then
    echo -e "${RED}❌ ERROR: .env.local is tracked by git!${NC}"
    ERRORS=$((ERRORS+1))
else
    echo -e "${GREEN}✅ .env.local is not tracked${NC}"
fi

# Check 2: Verify .env.example files exist
echo ""
echo "📋 Check 2: Verifying .env.example files exist..."
if [ ! -f ".env.example" ]; then
    echo -e "${YELLOW}⚠️  WARNING: .env.example not found${NC}"
    WARNINGS=$((WARNINGS+1))
else
    echo -e "${GREEN}✅ .env.example exists${NC}"
fi

if [ ! -f "tokengate-frontend/.env.example" ]; then
    echo -e "${YELLOW}⚠️  WARNING: tokengate-frontend/.env.example not found${NC}"
    WARNINGS=$((WARNINGS+1))
else
    echo -e "${GREEN}✅ tokengate-frontend/.env.example exists${NC}"
fi

# Check 3: Scan for hardcoded private keys
echo ""
echo "📋 Check 3: Scanning for hardcoded private keys..."
if grep -r "PRIVATE_KEY.*=.*['\"]0x" --include="*.js" --include="*.ts" --exclude-dir=node_modules . 2>/dev/null; then
    echo -e "${RED}❌ ERROR: Possible hardcoded private key found!${NC}"
    ERRORS=$((ERRORS+1))
else
    echo -e "${GREEN}✅ No hardcoded private keys detected${NC}"
fi

# Check 4: Scan for API keys in code
echo ""
echo "📋 Check 4: Scanning for hardcoded API keys..."
if grep -r "apiKey.*=.*['\"][a-zA-Z0-9]{20,}" --include="*.js" --include="*.ts" --exclude-dir=node_modules --exclude="*.example" . 2>/dev/null | grep -v "YOUR_API_KEY_HERE"; then
    echo -e "${YELLOW}⚠️  WARNING: Possible hardcoded API key found${NC}"
    WARNINGS=$((WARNINGS+1))
else
    echo -e "${GREEN}✅ No hardcoded API keys detected${NC}"
fi

# Check 5: Verify sensitive files are in .gitignore
echo ""
echo "📋 Check 5: Verifying .gitignore configuration..."
if grep -q "^\.env$" .gitignore; then
    echo -e "${GREEN}✅ .env is in .gitignore${NC}"
else
    echo -e "${RED}❌ ERROR: .env not in .gitignore!${NC}"
    ERRORS=$((ERRORS+1))
fi

if grep -q "\.env\*" tokengate-frontend/.gitignore; then
    echo -e "${GREEN}✅ .env* is in frontend .gitignore${NC}"
else
    echo -e "${RED}❌ ERROR: .env* not in frontend .gitignore!${NC}"
    ERRORS=$((ERRORS+1))
fi

# Check 6: Check for SECURITY.md
echo ""
echo "📋 Check 6: Verifying security documentation..."
if [ -f "SECURITY.md" ]; then
    echo -e "${GREEN}✅ SECURITY.md exists${NC}"
else
    echo -e "${YELLOW}⚠️  WARNING: SECURITY.md not found${NC}"
    WARNINGS=$((WARNINGS+1))
fi

# Summary
echo ""
echo "=================================="
echo "🔍 Security Check Summary"
echo "=================================="

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✅ All checks passed! Repository is secure for public access.${NC}"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠️  ${WARNINGS} warning(s) found. Review before pushing.${NC}"
    exit 0
else
    echo -e "${RED}❌ ${ERRORS} error(s) found! DO NOT push to public repository!${NC}"
    echo -e "${YELLOW}${WARNINGS} warning(s) also found.${NC}"
    exit 1
fi

