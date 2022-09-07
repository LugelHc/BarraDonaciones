"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThisReferencingVar = void 0;
const ts_morph_1 = require("ts-morph");
/**
 * Determines if the given AST Node is a VariableDeclaration of the form:
 *
 *     var self = this;
 *
 *
 * Will return false for the following, however, since this is a destructuring
 * of the `this` object's properties.
 *
 *     var { prop1, prop2 } = this;
 */
function isThisReferencingVar(node) {
    if (!ts_morph_1.Node.isVariableDeclaration(node)) {
        return false;
    }
    const varDec = node;
    const initializerIsThisKeyword = !!varDec.getInitializerIfKind(ts_morph_1.SyntaxKind.ThisKeyword);
    const assignedToSingleIdentifier = varDec.compilerNode.name.kind === ts_morph_1.SyntaxKind.Identifier;
    return initializerIsThisKeyword && assignedToSingleIdentifier;
}
exports.isThisReferencingVar = isThisReferencingVar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtdGhpcy1yZWZlcmVuY2luZy12YXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbC9pcy10aGlzLXJlZmVyZW5jaW5nLXZhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBaUU7QUFFakU7Ozs7Ozs7Ozs7R0FVRztBQUNILFNBQWdCLG9CQUFvQixDQUFFLElBQVU7SUFDL0MsSUFBSSxDQUFDLGVBQUksQ0FBQyxxQkFBcUIsQ0FBRSxJQUFJLENBQUUsRUFBRztRQUN6QyxPQUFPLEtBQUssQ0FBQztLQUNiO0lBRUQsTUFBTSxNQUFNLEdBQUcsSUFBMkIsQ0FBQztJQUUzQyxNQUFNLHdCQUF3QixHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUUscUJBQVUsQ0FBQyxXQUFXLENBQUUsQ0FBQztJQUN6RixNQUFNLDBCQUEwQixHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxxQkFBVSxDQUFDLFVBQVUsQ0FBQztJQUUzRixPQUFPLHdCQUF3QixJQUFJLDBCQUEwQixDQUFDO0FBQy9ELENBQUM7QUFYRCxvREFXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vZGUsIFN5bnRheEtpbmQsIFZhcmlhYmxlRGVjbGFyYXRpb24gfSBmcm9tIFwidHMtbW9ycGhcIjtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBnaXZlbiBBU1QgTm9kZSBpcyBhIFZhcmlhYmxlRGVjbGFyYXRpb24gb2YgdGhlIGZvcm06XG4gKlxuICogICAgIHZhciBzZWxmID0gdGhpcztcbiAqXG4gKlxuICogV2lsbCByZXR1cm4gZmFsc2UgZm9yIHRoZSBmb2xsb3dpbmcsIGhvd2V2ZXIsIHNpbmNlIHRoaXMgaXMgYSBkZXN0cnVjdHVyaW5nXG4gKiBvZiB0aGUgYHRoaXNgIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gKlxuICogICAgIHZhciB7IHByb3AxLCBwcm9wMiB9ID0gdGhpcztcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVGhpc1JlZmVyZW5jaW5nVmFyKCBub2RlOiBOb2RlICk6IG5vZGUgaXMgVmFyaWFibGVEZWNsYXJhdGlvbiB7XG5cdGlmKCAhTm9kZS5pc1ZhcmlhYmxlRGVjbGFyYXRpb24oIG5vZGUgKSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdCB2YXJEZWMgPSBub2RlIGFzIFZhcmlhYmxlRGVjbGFyYXRpb247XG5cblx0Y29uc3QgaW5pdGlhbGl6ZXJJc1RoaXNLZXl3b3JkID0gISF2YXJEZWMuZ2V0SW5pdGlhbGl6ZXJJZktpbmQoIFN5bnRheEtpbmQuVGhpc0tleXdvcmQgKTtcblx0Y29uc3QgYXNzaWduZWRUb1NpbmdsZUlkZW50aWZpZXIgPSB2YXJEZWMuY29tcGlsZXJOb2RlLm5hbWUua2luZCA9PT0gU3ludGF4S2luZC5JZGVudGlmaWVyO1xuXG5cdHJldHVybiBpbml0aWFsaXplcklzVGhpc0tleXdvcmQgJiYgYXNzaWduZWRUb1NpbmdsZUlkZW50aWZpZXI7XG59Il19